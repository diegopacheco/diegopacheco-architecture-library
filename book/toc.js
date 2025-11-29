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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">0. Chapter 0 - Zero</li><li class="chapter-item expanded "><a href="zero/WHY.html"><strong aria-hidden="true">1.</strong> Why</a></li><li class="chapter-item expanded "><a href="zero/RATIONALE.html"><strong aria-hidden="true">2.</strong> Rationale</a></li><li class="chapter-item expanded affix "><li class="part-title">1. Chapter 1 - Philosophy</li><li class="chapter-item expanded "><a href="philosofy/WHY.html"><strong aria-hidden="true">3.</strong> Why</a></li><li class="chapter-item expanded "><a href="philosofy/CRYSTAL_BALL.html"><strong aria-hidden="true">4.</strong> Crystal Ball</a></li><li class="chapter-item expanded "><a href="philosofy/DEFENSIVE.html"><strong aria-hidden="true">5.</strong> Defensive Programming</a></li><li class="chapter-item expanded "><a href="philosofy/DOING_HARD_THINGS.html"><strong aria-hidden="true">6.</strong> Doing Hard Things</a></li><li class="chapter-item expanded "><a href="philosofy/FRONTEND_VS_BACKEND.html"><strong aria-hidden="true">7.</strong> Frontend vs Backend</a></li><li class="chapter-item expanded "><a href="philosofy/OSS.html"><strong aria-hidden="true">8.</strong> Open Source First</a></li><li class="chapter-item expanded "><a href="philosofy/SO.html"><strong aria-hidden="true">9.</strong> Service Orientation</a></li><li class="chapter-item expanded "><a href="philosofy/PROTECT_YOUR_TIME.html"><strong aria-hidden="true">10.</strong> Protect Your Time</a></li><li class="chapter-item expanded affix "><li class="part-title">2. Chapter 2 - Anti-Patterns</li><li class="chapter-item expanded "><a href="anti-patterns/WHY.html"><strong aria-hidden="true">11.</strong> Why</a></li><li class="chapter-item expanded "><a href="anti-patterns/TECH_DEBT_PLAGUE.html"><strong aria-hidden="true">12.</strong> Tech Debt Plague</a></li><li class="chapter-item expanded "><a href="anti-patterns/IGNORE_CULTURE.html"><strong aria-hidden="true">13.</strong> Ignore Culture</a></li><li class="chapter-item expanded "><a href="anti-patterns/STAGNATION.html"><strong aria-hidden="true">14.</strong> Stagnation</a></li><li class="chapter-item expanded "><a href="anti-patterns/REQUIREMENTS.html"><strong aria-hidden="true">15.</strong> Requirements</a></li><li class="chapter-item expanded affix "><li class="part-title">3. Chapter 3 - Dilemmas</li><li class="chapter-item expanded "><a href="dilemmas/WHY.html"><strong aria-hidden="true">16.</strong> Why</a></li><li class="chapter-item expanded "><a href="dilemmas/DISCOVERY_VS_DELIVERY.html"><strong aria-hidden="true">17.</strong> Discovery vs Delivery</a></li><li class="chapter-item expanded "><a href="dilemmas/MOVE_FAST_VS_DO_IT_RIGHT.html"><strong aria-hidden="true">18.</strong> Move Fast vs Do It Right</a></li><li class="chapter-item expanded "><a href="dilemmas/BUILD_VS_BUY.html"><strong aria-hidden="true">19.</strong> Build vs Buy</a></li><li class="chapter-item expanded "><a href="dilemmas/DECIDE_OR_WAIT.html"><strong aria-hidden="true">20.</strong> Decide or Wait</a></li><li class="chapter-item expanded affix "><li class="part-title">4. Chapter 4 - Properties</li><li class="chapter-item expanded "><a href="properties/WHY.html"><strong aria-hidden="true">21.</strong> Why</a></li><li class="chapter-item expanded "><a href="properties/ANTI-FRAGILITY.html"><strong aria-hidden="true">22.</strong> Anti-Fragility</a></li><li class="chapter-item expanded "><a href="properties/STATE-OF-THE-ART.html"><strong aria-hidden="true">23.</strong> State of the Art</a></li><li class="chapter-item expanded "><a href="properties/SCALABILITY.html"><strong aria-hidden="true">24.</strong> Scalability</a></li><li class="chapter-item expanded "><a href="properties/OBSERVABLE.html"><strong aria-hidden="true">25.</strong> Observability</a></li><li class="chapter-item expanded "><a href="properties/STABILITY.html"><strong aria-hidden="true">26.</strong> Stability</a></li><li class="chapter-item expanded "><a href="properties/SECURE.html"><strong aria-hidden="true">27.</strong> Secure</a></li><li class="chapter-item expanded affix "><li class="part-title">5. Chapter 5 - Practices</li><li class="chapter-item expanded "><a href="pratices/WHY.html"><strong aria-hidden="true">28.</strong> Why</a></li><li class="chapter-item expanded "><a href="pratices/ATTENTION_TO_DETAIL.html"><strong aria-hidden="true">29.</strong> Attention to Detail</a></li><li class="chapter-item expanded "><a href="pratices/ARCH_REVIEW.html"><strong aria-hidden="true">30.</strong> Architecture Review</a></li><li class="chapter-item expanded "><a href="pratices/DESIGN_FIRST.html"><strong aria-hidden="true">31.</strong> Design First</a></li><li class="chapter-item expanded "><a href="pratices/OWNERSHIP.html"><strong aria-hidden="true">32.</strong> Ownership</a></li><li class="chapter-item expanded "><a href="pratices/READING_CODE.html"><strong aria-hidden="true">33.</strong> Reading Code</a></li><li class="chapter-item expanded "><a href="pratices/MONTHLY_REVIEW.html"><strong aria-hidden="true">34.</strong> Monthly Review</a></li><li class="chapter-item expanded "><a href="pratices/WORKING_ON_TRENCHES.html"><strong aria-hidden="true">35.</strong> Working in the Trenches</a></li><li class="chapter-item expanded affix "><li class="part-title">6. Chapter 6 - Concepts</li><li class="chapter-item expanded "><a href="concepts/WHY.html"><strong aria-hidden="true">36.</strong> Why</a></li><li class="chapter-item expanded "><a href="concepts/ACID.html"><strong aria-hidden="true">37.</strong> ACID</a></li><li class="chapter-item expanded "><a href="concepts/AUTHENT.html"><strong aria-hidden="true">38.</strong> Authentication &amp; Authorization</a></li><li class="chapter-item expanded "><a href="concepts/JWT.html"><strong aria-hidden="true">39.</strong> JWT</a></li><li class="chapter-item expanded "><a href="concepts/BASE.html"><strong aria-hidden="true">40.</strong> BASE</a></li><li class="chapter-item expanded "><a href="concepts/IDEMPOTENCY.html"><strong aria-hidden="true">41.</strong> Idempotency</a></li><li class="chapter-item expanded "><a href="concepts/OPLOCKING.html"><strong aria-hidden="true">42.</strong> Optimistic vs Pessimistic Locking</a></li><li class="chapter-item expanded "><a href="concepts/PARTITION.html"><strong aria-hidden="true">43.</strong> Partition</a></li><li class="chapter-item expanded "><a href="concepts/SCHEMA_EVOLUTION.html"><strong aria-hidden="true">44.</strong> Schema Evolution</a></li><li class="chapter-item expanded "><a href="concepts/SOURCE_OF_TRUTH.html"><strong aria-hidden="true">45.</strong> Source of Truth</a></li><li class="chapter-item expanded "><a href="concepts/STATELESS_VS_STATEFULL_SVC.html"><strong aria-hidden="true">46.</strong> Stateless vs Stateful Services</a></li><li class="chapter-item expanded affix "><li class="part-title">7. Chapter 7 - Patterns</li><li class="chapter-item expanded "><a href="patterns/WHY.html"><strong aria-hidden="true">47.</strong> Why</a></li><li class="chapter-item expanded "><a href="patterns/API_GATEWAY.html"><strong aria-hidden="true">48.</strong> API Gateway</a></li><li class="chapter-item expanded "><a href="patterns/BFF_PATTERN.html"><strong aria-hidden="true">49.</strong> BFF Pattern</a></li><li class="chapter-item expanded "><a href="patterns/CACHE.html"><strong aria-hidden="true">50.</strong> Cache</a></li><li class="chapter-item expanded "><a href="patterns/CONNECTION_POOL.html"><strong aria-hidden="true">51.</strong> Connection Pool</a></li><li class="chapter-item expanded "><a href="patterns/FEATURE_FLAGS.html"><strong aria-hidden="true">52.</strong> Feature Flags</a></li><li class="chapter-item expanded "><a href="patterns/LB.html"><strong aria-hidden="true">53.</strong> Load Balancer</a></li><li class="chapter-item expanded "><a href="patterns/MESSAGE_PATTERNS.html"><strong aria-hidden="true">54.</strong> Message Patterns</a></li><li class="chapter-item expanded "><a href="patterns/MESSAGE_ID.html"><strong aria-hidden="true">55.</strong> Message ID</a></li><li class="chapter-item expanded "><a href="patterns/PAGINATION.html"><strong aria-hidden="true">56.</strong> Pagination</a></li><li class="chapter-item expanded "><a href="patterns/QUEUE.html"><strong aria-hidden="true">57.</strong> Queue</a></li><li class="chapter-item expanded "><a href="patterns/RETRY.html"><strong aria-hidden="true">58.</strong> Retry</a></li><li class="chapter-item expanded "><a href="patterns/WEB_HOOK.html"><strong aria-hidden="true">59.</strong> Web Hook</a></li><li class="chapter-item expanded affix "><li class="part-title">8. Chapter 8 - Tools</li><li class="chapter-item expanded "><a href="tools/WHY.html"><strong aria-hidden="true">60.</strong> Why</a></li><li class="chapter-item expanded "><a href="tools/DIAGRAMING.html"><strong aria-hidden="true">61.</strong> Diagramming Tools</a></li><li class="chapter-item expanded "><a href="tools/WRITING.html"><strong aria-hidden="true">62.</strong> Writing Tools</a></li><li class="chapter-item expanded "><a href="tools/THINKING.html"><strong aria-hidden="true">63.</strong> Thinking Tools</a></li><li class="chapter-item expanded affix "><li class="part-title">9. Chapter 9 - Epilogue</li><li class="chapter-item expanded "><a href="epilogue/IN_THE_END.html"><strong aria-hidden="true">64.</strong> Epilogue</a></li><li class="chapter-item expanded "><a href="epilogue/RESOURCES.html"><strong aria-hidden="true">65.</strong> Resources</a></li><li class="chapter-item expanded "><a href="epilogue/HOW_I_WROTE_THE_BOOK.html"><strong aria-hidden="true">66.</strong> How I Wrote The Book</a></li><li class="chapter-item expanded "><a href="CHANGELOG.html"><strong aria-hidden="true">67.</strong> Changelog</a></li><li class="chapter-item expanded "><a href="epilogue/REFERENCES.html"><strong aria-hidden="true">68.</strong> References</a></li><li class="chapter-item expanded "><a href="epilogue/GLOSSARY.html"><strong aria-hidden="true">69.</strong> Glossary</a></li><li class="chapter-item expanded "><a href="epilogue/INDEX.html"><strong aria-hidden="true">70.</strong> Index</a></li></ol>';
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
