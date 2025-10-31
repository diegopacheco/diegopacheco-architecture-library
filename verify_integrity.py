#!/usr/bin/env python3

import os
import re
from pathlib import Path
from collections import defaultdict

base_dir = "/Users/diegopacheco/git/diegopacheco/diegopacheco-architecture-library"

def find_all_markdown_files():
    md_files = []
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    return sorted(md_files)

def read_file_safely(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read(), None
    except Exception as e:
        return None, str(e)

def extract_links(content):
    internal_links = re.findall(r'\[([^\]]+)\]\(([^)]+\.md)\)', content)
    external_links = re.findall(r'\[([^\]]+)\]\((https?://[^)]+)\)', content)
    return internal_links, external_links

def check_internal_link(filepath, link_path):
    file_dir = os.path.dirname(filepath)
    if link_path.startswith('/'):
        target = os.path.join(base_dir, link_path.lstrip('/'))
    else:
        target = os.path.normpath(os.path.join(file_dir, link_path))
    return os.path.exists(target), target

def check_content_elements(content):
    elements = {
        'headings': len(re.findall(r'^#+\s+', content, re.MULTILINE)),
        'code_blocks': len(re.findall(r'```', content)) // 2,
        'lists': len(re.findall(r'^[\*\-\+]\s+', content, re.MULTILINE)),
        'numbered_lists': len(re.findall(r'^\d+\.\s+', content, re.MULTILINE)),
        'images': len(re.findall(r'!\[([^\]]*)\]\(([^)]+)\)', content)),
        'videos': len(re.findall(r'<iframe|<video|youtube\.com|youtu\.be', content, re.IGNORECASE)),
        'tables': len(re.findall(r'\|.*\|', content)),
    }
    return elements

def verify_repository():
    print("=" * 80)
    print("MARKDOWN REPOSITORY INTEGRITY VERIFICATION REPORT")
    print("=" * 80)
    print()

    all_files = find_all_markdown_files()
    print(f"Total markdown files found: {len(all_files)}")
    print()

    readable_files = []
    unreadable_files = []
    total_internal_links = 0
    total_external_links = 0
    broken_internal_links = []
    malformed_external_links = []
    content_stats = defaultdict(int)

    print("=" * 80)
    print("FILE ACCESSIBILITY CHECK")
    print("=" * 80)

    for filepath in all_files:
        content, error = read_file_safely(filepath)
        if error:
            unreadable_files.append((filepath, error))
            print(f"ERROR: {filepath}")
            print(f"  Reason: {error}")
        else:
            readable_files.append(filepath)

    print(f"\nReadable files: {len(readable_files)}")
    print(f"Unreadable files: {len(unreadable_files)}")
    print()

    print("=" * 80)
    print("LINK VERIFICATION")
    print("=" * 80)

    for filepath in readable_files:
        content, _ = read_file_safely(filepath)
        internal_links, external_links = extract_links(content)

        total_internal_links += len(internal_links)
        total_external_links += len(external_links)

        for link_text, link_path in internal_links:
            exists, target = check_internal_link(filepath, link_path)
            if not exists:
                broken_internal_links.append({
                    'file': filepath,
                    'link_text': link_text,
                    'link_path': link_path,
                    'resolved_target': target
                })

        for link_text, link_url in external_links:
            if not link_url.startswith(('http://', 'https://')):
                malformed_external_links.append({
                    'file': filepath,
                    'link_text': link_text,
                    'link_url': link_url
                })

    print(f"Total internal links: {total_internal_links}")
    print(f"Total external links: {total_external_links}")
    print(f"Broken internal links: {len(broken_internal_links)}")
    print(f"Malformed external links: {len(malformed_external_links)}")
    print()

    if broken_internal_links:
        print("BROKEN INTERNAL LINKS:")
        for link in broken_internal_links:
            print(f"  File: {link['file']}")
            print(f"    Link: [{link['link_text']}]({link['link_path']})")
            print(f"    Target not found: {link['resolved_target']}")
            print()

    print("=" * 80)
    print("CONTENT ELEMENTS VERIFICATION")
    print("=" * 80)

    total_elements = {
        'headings': 0,
        'code_blocks': 0,
        'lists': 0,
        'numbered_lists': 0,
        'images': 0,
        'videos': 0,
        'tables': 0,
    }

    files_with_no_headings = []
    empty_files = []

    for filepath in readable_files:
        content, _ = read_file_safely(filepath)

        if not content or len(content.strip()) == 0:
            empty_files.append(filepath)
            continue

        elements = check_content_elements(content)

        for key in total_elements:
            total_elements[key] += elements[key]

        if elements['headings'] == 0:
            files_with_no_headings.append(filepath)

    print(f"Total headings: {total_elements['headings']}")
    print(f"Total code blocks: {total_elements['code_blocks']}")
    print(f"Total bullet lists: {total_elements['lists']}")
    print(f"Total numbered lists: {total_elements['numbered_lists']}")
    print(f"Total images: {total_elements['images']}")
    print(f"Total videos/embeds: {total_elements['videos']}")
    print(f"Total tables: {total_elements['tables']}")
    print()

    print(f"Empty files: {len(empty_files)}")
    if empty_files:
        for f in empty_files:
            print(f"  - {f}")
    print()

    print(f"Files with no headings: {len(files_with_no_headings)}")
    if files_with_no_headings:
        for f in files_with_no_headings:
            print(f"  - {f}")
    print()

    print("=" * 80)
    print("FILE STRUCTURE VERIFICATION")
    print("=" * 80)

    directories = defaultdict(list)
    for filepath in all_files:
        rel_path = os.path.relpath(filepath, base_dir)
        dir_name = os.path.dirname(rel_path)
        if dir_name == '':
            dir_name = 'ROOT'
        directories[dir_name].append(os.path.basename(filepath))

    for dir_name in sorted(directories.keys()):
        print(f"\n{dir_name}/ ({len(directories[dir_name])} files)")
        for filename in sorted(directories[dir_name]):
            print(f"  - {filename}")

    print()
    print("=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total files: {len(all_files)}")
    print(f"Readable: {len(readable_files)}")
    print(f"Unreadable: {len(unreadable_files)}")
    print(f"Empty: {len(empty_files)}")
    print(f"Total internal links: {total_internal_links}")
    print(f"Broken internal links: {len(broken_internal_links)}")
    print(f"Total external links: {total_external_links}")
    print(f"Total content elements: {sum(total_elements.values())}")
    print()

    if unreadable_files == [] and broken_internal_links == [] and empty_files == []:
        print("STATUS: ALL CHECKS PASSED")
    else:
        print("STATUS: ISSUES FOUND")
        if unreadable_files:
            print(f"  - {len(unreadable_files)} unreadable files")
        if broken_internal_links:
            print(f"  - {len(broken_internal_links)} broken internal links")
        if empty_files:
            print(f"  - {len(empty_files)} empty files")

    print("=" * 80)

if __name__ == "__main__":
    verify_repository()
