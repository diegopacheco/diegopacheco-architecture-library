const VERSION = "1.0.4";

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('div');
    footer.className = 'book-version-footer';
    footer.innerHTML = `<p>Version ${VERSION}</p>`;

    const content = document.querySelector('.content');
    if (content) {
        content.appendChild(footer);
    }
});
