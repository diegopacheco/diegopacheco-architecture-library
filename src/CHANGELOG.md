# Changelog

All notable changes to this project will be documented in this file.

## [1.0.7] - 2025-11-06

### Added
- JWT.md: Comprehensive documentation on JSON Web Tokens including structure, flow, and security best practices
- GLOSSARY.md: Added JSON Web Token (JWT) entry with definition and explanation
- INDEX.md: Added JWT entry in alphabetical index and Chapter 6 concepts section
- REFERENCES.md: Added JWT.io debugger tool and Wikipedia JWT reference

## [1.0.6] - 2025-11-02

### Added
- HOW_I_WROTE_THE_BOOK.md: Behind the scenes of the book creation process

### Changed
- GLOSSARY.md: Added Business Logic, Discovery Work, and Experimentation terms

## [1.0.5] - 2025-10-31

### Added

Pattern files - Added "Why you need to know this?" sections with practical guidance:
- WEB_HOOK.md: Added section explaining use cases for async processing notifications and 3rd party integrations, emphasizing event-driven architecture over polling
- RETRY.md: Added section on implementing retries with timeouts and progressive backoff for resilience, with AWS SDK examples
- QUEUE.md: Added section covering three scenarios: async processing, system decoupling, and HTTP server request management, plus monitoring guidance for queue depth and processing rates
- PAGINATION.md: Added section distinguishing when to use pagination vs big data patterns like CDC, Event Sourcing with Kafka, addressing findAll and Select * anti-patterns
- MESSAGE_PATTERNS.md: Added section explaining Publish/Subscribe for event-driven architectures and Point-to-Point for task distribution
- MESSAGE_ID.md: Added section emphasizing necessity for distributed systems and messaging/Kafka implementations
- LB.md: Added section explaining load balancer requirements for backend services with AWS ALB/NLB examples
- FEATURE_FLAGS.md: Added section with best practices including time-to-live, naming conventions, avoiding nesting, testing requirements, and catalog documentation
- CONNECTION_POOL.md: Added section on database connection pooling necessity and connection reuse benefits
- CACHE.md: Added section on TTL invalidation strategies, protecting against database latency, and cache pre-warming techniques
- BFF_PATTERN.md: Added section on TypeScript/NodeJS/Deno/Bun implementations, emphasizing separation of rendering logic from business logic
- API_GATEWAY.md: Added section covering three scenarios: public-facing APIs, cross-cloud communication, and monolith-to-microservices migrations

References and resources:
- REFERENCES.md: Added Grammarly under Writing Tools section
- REFERENCES.md: Added Figma under Design Tools section
- REFERENCES.md: Added V Language, Gleam, Deno, and Bun homepages under Language & Runtime Homepages section
- REFERENCES.md: Added AWS re:Invent 2022 keynote with Dr. Werner Vogels under Videos & Media section
- REFERENCES.md: Added Mark Zuckerberg videos on product strategy and fast learning cycles under Videos & Media section

### Changed

Grammar and spelling corrections across multiple files:
- introduction.md: Changed "guidance about Software Architecture" to "guidance on Software Architecture"
- DEFENSIVE.md: Fixed typo "ProducService" to "ProductService" in Scala code example
- WORKING_ON_TRENCHES.md: Changed "frontend line" to "front line"
- OPLOCKING.md: Improved grammar in React re-rendering scenario explanation
- API_GATEWAY.md: Fixed "todo" to "to do", "Comunication" to "Communication", "departaments" to "departments"
- BFF_PATTERN.md: Fixed "mmobile" to "mobile", "pattrern" to "pattern"
- CACHE.md: Fixed "simmple" to "simple", "spires" to "expires", "now only" to "not only", "amd" to "and"
- CONNECTION_POOL.md: Changed "everything a backend system need access" to "every time a backend system needs to access"
- FEATURE_FLAGS.md: Fixed "feaure" to "feature", "experrience" to "experience", "buisness" to "business", "themme" to "theme", "falgs" to "flags", "testd" to "tested"
- LB.md: Fixed "resorcues" to "resources"
- MESSAGE_ID.md: Improved section header formatting from "Why this is important?" to proper header
- MESSAGE_PATTERNS.md: Fixed "secnario" to "scenario"
- PAGINATION.md: Fixed "forecasrting" to "forecasting", "learnign" to "learning", "Everything" to "Every time"
- QUEUE.md: Fixed "reciver" to "receiver", "needss" to "needs", "a good metrics" to "good metrics"
- RETRY.md: Fixed "Everytime" to "Every time", "Everysingle" to "Every single"

## [1.0.4] - 2025-10-30

### Added

Dilemmas - Added "Why you need to know this?" sections:
- DISCOVERY_VS_DELIVERY.md: Added section emphasizing learning speed as competitive advantage with Mark Zuckerberg product strategy reference, fixed TikTok embed iframe for proper display
- MOVE_FAST_VS_DO_IT_RIGHT.md: Enhanced content on balancing speed vs quality in product development
- DECIDE_OR_WAIT.md: Added section on cost of delay analysis, experimentation strategies, and importance of Blameless Feature Reviews for learning from decisions
- BUILD_VS_BUY.md: Added section on collaboration with product/UX, conducting trade-off analysis, and socializing decisions with stakeholders

Anti-patterns - Added "Why you need to know this?" sections:
- TECH_DEBT_PLAGUE.md: Added section with strategies to fight tech debt including incremental improvements, team education, pushing back on bad practices, and explaining costs to management
- STAGNATION.md: Added section on fighting auto-pilot mode through passion, continuous learning, conferences, knowledge sharing, experimentation, and POCs
- REQUIREMENTS.md: Added section on handling requirements through product collaboration, UX understanding, spike techniques, production validation, experiments, and industry research
- IGNORE_CULTURE.md: Enhanced content emphasizing architect's role as leader and teacher in setting example for caring and action-oriented behavior

### Changed
- GLOSSARY.md: Added terms including Blast Radius, Blameless Feature Reviews, Learning Cycles, OpenSearch/Elasticsearch, and Spike

## [1.0.3] - 2025-10-29

### Added

Concepts - Added "Why you need to know this?" sections:
- STATELESS_VS_STATEFULL_SVC.md: Added comprehensive content on service architecture patterns
- SOURCE_OF_TRUTH.md: Added section explaining importance in distributed systems, addressing write vs read patterns, and avoiding data inconsistencies
- SCHEMA_EVOLUTION.md: Added section on backward vs forward compatibility strategies, emphasizing backend systems as source of truth and rollback considerations
- PARTITION.md: Added section explaining when partitions become necessary at scale and for rapidly growing datasets
- OPLOCKING.md: Added section comparing pessimistic vs optimistic locking use cases, including React re-rendering scenario and high/low contention environments
- IDEMPOTENCY.md: Added section on REST API design requirements for GET/HEAD/OPTIONS/TRACE/PUT methods and code complexity implications

### Changed
- BASE.md: Enhanced with additional details and clarity on eventual consistency patterns
- AUTHENT.md: Enhanced with comprehensive authentication and authorization coverage
- ACID.md: Enhanced with detailed transaction property explanations

## [1.0.2] - 2025-10-28

### Changed
- Enhanced ANTI-FRAGILITY.md with additional content
- Expanded OSS.md with more open source insights
- Extended PROTECT_YOUR_TIME.md with additional time management content
- Enhanced SO.md with more service orientation practices
- Updated CRYSTAL_BALL.md with additional insights
- Improved STAGNATION.md anti-pattern documentation
- Expanded GLOSSARY.md with more architectural terms

### Added

- CHANGELOG.md file to track changes and updates

## [1.0.1] - 2025-10-27

### Added
- Chapter 0 (Zero) with rationale and reasoning behind the book
- Chapter 2 (Anti-Patterns): TECH_DEBT_PLAGUE, IGNORE_CULTURE, STAGNATION, REQUIREMENTS
- Chapter 3 (Dilemmas): DISCOVERY_VS_DELIVERY, MOVE_FAST_VS_DO_IT_RIGHT, BUILD_VS_BUY, DECIDE_OR_WAIT
- Chapter 4 (Properties): ANTI-FRAGILITY, STATE-OF-THE-ART, SCALABILITY, OBSERVABLE, STABILITY, SECURE
- Chapter 7 (Patterns) as separate section from Concepts
- Chapter 8 (Tools): DIAGRAMING, WRITING, THINKING
- Chapter 9 (Epilogue): IN_THE_END, RESOURCES, REFERENCES, GLOSSARY, INDEX
- CONNECTION_POOL pattern documentation
- WHY sections across all chapters explaining rationale
- GitHub Pages deployment workflow
- Glossary with architectural terms and definitions
- Index for topic navigation
- Resources section with books and learning materials
- References section with external links

### Changed
- Reorganized book structure into numbered chapters
- Separated Concepts and Patterns into distinct chapters
- Moved pattern files from /concepts to /patterns directory
- Enhanced defensive programming content
- Expanded crystal ball philosophy
- Improved English grammar and readability
- Updated table of contents and navigation

### Fixed
- Page rendering issues
- Documentation structure inconsistencies

## [1.0.0] - 2025-10-27

### Added
- Initial project setup with mdBook
- Introduction and cover page
- Philosophy section: CRYSTAL_BALL, DEFENSIVE, DOING_HARD_THINGS, FRONTEND_VS_BACKEND, OSS, SO
- Practices section: ATTENTION_TO_DETAIL, ARCH_REVIEW, DESIGN_FIRST, OWNERSHIP, READING_CODE, MONTHLY_REVIEW, WORKING_ON_TRENCHES
- Concepts and Patterns section: ACID, API_GATEWAY, AUTHENT, BASE, BFF_PATTERN, CACHE, CONNECTION_POOL, FEATURE_FLAGS, IDEMPOTENCY, LB, MESSAGE_PATTERNS, MESSAGE_ID, OPLOCKING, PAGINATION, PARTITION, QUEUE, RETRY, SCHEMA_EVOLUTION, SOURCE_OF_TRUTH, STATELESS_VS_STATEFULL_SVC, WEB_HOOK
- Build scripts and documentation workflow
- VERSION tracking system
- Theme customization
- .gitignore configuration
