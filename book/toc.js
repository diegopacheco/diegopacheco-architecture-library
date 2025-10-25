// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">1. Philosophy</li><li class="chapter-item expanded "><a href="philosofy/CRYSTAL_BALL.html"><strong aria-hidden="true">1.</strong> Crystall Ball</a></li><li class="chapter-item expanded "><a href="philosofy/DEFENSIVE.html"><strong aria-hidden="true">2.</strong> Defensive Programming</a></li><li class="chapter-item expanded "><a href="philosofy/DOING_HARD_THINGS.html"><strong aria-hidden="true">3.</strong> Doing Hard Things</a></li><li class="chapter-item expanded "><a href="philosofy/FRONTEND_VS_BACKEND.html"><strong aria-hidden="true">4.</strong> Frontend vs Backend</a></li><li class="chapter-item expanded "><a href="philosofy/OSS.html"><strong aria-hidden="true">5.</strong> Open Source First</a></li><li class="chapter-item expanded "><a href="philosofy/SO.html"><strong aria-hidden="true">6.</strong> Service Orientation</a></li><li class="chapter-item expanded "><a href="philosofy/PROTECT_YOUR_TIME.html"><strong aria-hidden="true">7.</strong> Protect Your Time</a></li><li class="chapter-item expanded affix "><li class="part-title">2. Anti-Patterns:</li><li class="chapter-item expanded "><a href="anti-patterns/TECH_DEBT_PLAGUE.html"><strong aria-hidden="true">8.</strong> Tech Debt Plague</a></li><li class="chapter-item expanded "><a href="anti-patterns/STAGNATION.html"><strong aria-hidden="true">9.</strong> Stagnation</a></li><li class="chapter-item expanded affix "><li class="part-title">3. Pratices</li><li class="chapter-item expanded "><a href="pratices/ATTENTION_TO_DETAIL.html"><strong aria-hidden="true">10.</strong> Attention to Detail</a></li><li class="chapter-item expanded "><a href="pratices/ARCH_REVIEW.html"><strong aria-hidden="true">11.</strong> Architecture Review</a></li><li class="chapter-item expanded "><a href="pratices/DESIGN_FIRST.html"><strong aria-hidden="true">12.</strong> Design First</a></li><li class="chapter-item expanded "><a href="pratices/OWNERSHIP.html"><strong aria-hidden="true">13.</strong> Ownership</a></li><li class="chapter-item expanded "><a href="pratices/READING_CODE.html"><strong aria-hidden="true">14.</strong> Reading Code</a></li><li class="chapter-item expanded "><a href="pratices/MONTHLY_REVIEW.html"><strong aria-hidden="true">15.</strong> Monthly Review</a></li><li class="chapter-item expanded "><a href="pratices/WORKING_ON_TRENCHES.html"><strong aria-hidden="true">16.</strong> Working on Trenches</a></li><li class="chapter-item expanded affix "><li class="part-title">4. Concepts and Patterns</li><li class="chapter-item expanded "><a href="concepts/ACID.html"><strong aria-hidden="true">17.</strong> ACID</a></li><li class="chapter-item expanded "><a href="concepts/API_GATEWAY.html"><strong aria-hidden="true">18.</strong> API Gateway</a></li><li class="chapter-item expanded "><a href="concepts/AUTHENT.html"><strong aria-hidden="true">19.</strong> Authentication &amp; Authorization</a></li><li class="chapter-item expanded "><a href="concepts/BASE.html"><strong aria-hidden="true">20.</strong> BASE</a></li><li class="chapter-item expanded "><a href="concepts/BFF_PATTERN.html"><strong aria-hidden="true">21.</strong> BFF Pattern</a></li><li class="chapter-item expanded "><a href="concepts/CACHE.html"><strong aria-hidden="true">22.</strong> Cache</a></li><li class="chapter-item expanded "><a href="concepts/CONNECTION_POOL.html"><strong aria-hidden="true">23.</strong> Connection Pool</a></li><li class="chapter-item expanded "><a href="concepts/FEATURE_FLAGS.html"><strong aria-hidden="true">24.</strong> Feature Flags</a></li><li class="chapter-item expanded "><a href="concepts/IDEMPOTENCY.html"><strong aria-hidden="true">25.</strong> Idempotency</a></li><li class="chapter-item expanded "><a href="concepts/LB.html"><strong aria-hidden="true">26.</strong> Load Balancer</a></li><li class="chapter-item expanded "><a href="concepts/MESSAGE_PATTERNS.html"><strong aria-hidden="true">27.</strong> Message Patterns</a></li><li class="chapter-item expanded "><a href="concepts/MESSAGE_ID.html"><strong aria-hidden="true">28.</strong> Message Id</a></li><li class="chapter-item expanded "><a href="concepts/OPLOCKING.html"><strong aria-hidden="true">29.</strong> Optimistic vs Pessimistic Locking</a></li><li class="chapter-item expanded "><a href="concepts/PAGINATION.html"><strong aria-hidden="true">30.</strong> Pagination</a></li><li class="chapter-item expanded "><a href="concepts/PARTITION.html"><strong aria-hidden="true">31.</strong> Partition</a></li><li class="chapter-item expanded "><a href="concepts/QUEUE.html"><strong aria-hidden="true">32.</strong> Queue</a></li><li class="chapter-item expanded "><a href="concepts/RETRY.html"><strong aria-hidden="true">33.</strong> Retry</a></li><li class="chapter-item expanded "><a href="concepts/SCHEMA_EVOLUTION.html"><strong aria-hidden="true">34.</strong> Schema Evolution</a></li><li class="chapter-item expanded "><a href="concepts/SOURCE_OF_TRUTH.html"><strong aria-hidden="true">35.</strong> Source of Truth</a></li><li class="chapter-item expanded "><a href="concepts/STATELESS_VS_STATEFULL_SVC.html"><strong aria-hidden="true">36.</strong> Stateless vs Stateful Services</a></li><li class="chapter-item expanded "><a href="concepts/WEB_HOOK.html"><strong aria-hidden="true">37.</strong> Web Hook</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
