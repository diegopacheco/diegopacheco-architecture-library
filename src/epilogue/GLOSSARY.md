# Glossary

A comprehensive glossary of technical terms, concepts, patterns, and methodologies covered in this architecture library.

## A

**A/B Testing**
An experimental technique to gather data and make informed decisions by comparing two versions of a system.

**Access Control Lists (ACLs)**
A list-based authorization model that explicitly specifies which users or systems can access particular resources.

**ACID**
Atomicity, Consistency, Isolation, Durability - a set of properties that guarantee database transactions are processed reliably even in case of errors or power failures.

**Anti-Fragility**
A system property where systems not only withstand shocks and stressors but also improve and grow stronger as a result of them.

**API Gateway**
A pattern that acts as a single entry point for microservices, handling request routing, response aggregation, authentication, logging, and rate limiting.

**API Keys**
An authentication method where a unique key is assigned to clients for identifying and authenticating API requests.

**Architecture Review**
The practice of documenting architecture decisions, trade-offs, and principles for communication and improvement.

**Attention to Detail**
A practice of meticulous examination of code quality, tests, production logs, dashboards, and security audits.

**Authentication**
The process of verifying the identity of a user or system to ensure the entity requesting access is who they claim to be.

**Authorization**
The process of determining what an authenticated user or system is allowed to do, defining permissions and access levels for different resources.

## B

**Backpressure**
A situation where incoming message rate exceeds processing capacity, leading to latency and potential message loss.

**Backward Compatibility**
When new code can read data written by old code, requiring new services to provide defaults for missing fields.

**BASE**
Basically Available, Soft state, Eventually consistent - a consistency model used by many NoSQL databases that prioritizes availability over immediate consistency.

**Backend for Frontend (BFF)**
A pattern creating separate backend services tailored to specific frontend applications' needs, typically containing rendering logic.

**Big Ball of Mud**
An anti-pattern where a system has no recognizable architecture, with haphazardly structured code that is difficult to maintain and extend.

**Biometric Verification**
An authentication method using unique biological characteristics such as fingerprints, facial recognition, or iris scans to verify identity.

**Build vs Buy Dilemma**
The decision between building solutions in-house for core business advantages or buying external solutions.

## C

**Cache**
A software component storing data for faster future access, commonly used in web browsers, databases, and operating systems.

**Capability Oriented Services**
A principle that services should be organized around business capabilities rather than technical layers, promoting better alignment with business goals.

**Chaos Engineering**
A practice of inducing and provoking failure in systems and infrastructure to prove system tolerance and recovery.

**Conceptual Drift**
An anti-pattern where systems gradually deviate from the intended architecture over time, losing coherence and consistency.

**Conceptual Integrity**
A principle emphasizing consistency and coherence in system design, ensuring all parts work together harmoniously under a unified vision.

**Class Diagram**
A UML diagram useful for internal system design modeling or database table modeling.

**Connection Pool**
A cache of database connections maintained so connections can be reused for future database requests, reducing the cost of opening/closing connections.

**Consistent Hashing**
A partitioning technique for distributed systems ensuring stable distribution when nodes are added/removed.

**Cost of Delay**
A Lean concept measuring the cost of waiting versus deciding immediately.

**Crystal Ball (Foresight)**
A practice of thinking ahead and predicting future changes to architecture, allowing preparation for upcoming needs.

**Cursor-Based Pagination**
A pagination method using a cursor (unique identifier) to mark the starting point for the next page.

## D

**Data Synchronization**
The process of keeping data consistent across multiple systems.

**Decide or Wait Dilemma**
The decision of whether to make timely decisions or wait for more information.

**Defensive Programming**
A design approach emphasizing anticipating and handling potential errors or unexpected inputs to make code resilient.

**Design First**
A practice of producing the design before implementation, documented and communicated to the team.

**Discovery vs Delivery Dilemma**
The balance between exploring what to build (discovery) and executing the build (delivery).

**Distributed Monolith**
An anti-pattern where a system is decomposed into services but remains tightly coupled, losing the benefits of distributed architecture while gaining its complexity.

**Distributed Systems**
Computer systems where components are located on different networked computers that communicate and coordinate to achieve a common goal, presenting unique challenges in consistency, availability, and partition tolerance.

## E

**Encryption (In Transit and At Rest)**
Security measures to protect data during transmission and while stored.

**Entitlements**
Specific rights or privileges granted to a user or system after authentication and authorization, defining what actions can be performed on resources.

**Event Sourcing**
A technique storing a sequence of events that can be processed later to reconstruct system state.

**Expand-Contract Pattern**
A three-phase deployment strategy for breaking changes: expand (add new field), migrate (update services), contract (remove old field).

**Exponential Backoff**
A retry strategy where the wait time increases exponentially with each retry attempt.

**Extreme Ownership**
A practice where architects take complete responsibility for the success and failure of the architecture they design.

## F

**Feature Flags**
Runtime configuration switches that enable or disable functionality without deploying new code, decoupling deployment from release.

**FIFO Ordering**
A message ordering guarantee where messages are processed in the order they were sent.

**Figma**
A collaborative design tool used for creating user interface designs, prototypes, and design systems in a browser-based environment.

**Forward Compatibility**
When old code can read data written by new code, allowing old services to safely ignore new fields they don't understand.

**Full Text Search**
A search capability like OpenSearch or Elasticsearch for searching large product catalogs.

## G

**Gatekeeping**
An anti-pattern where architects act as bottlenecks by requiring approval for all decisions, reducing team autonomy and slowing delivery.

**Guard-rails**
Safety mechanisms put in place to allow experimentation and testing in production while minimizing risk to users and systems.

## H

**HikariCP**
A high-performance JDBC connection pool library for Java, known for being lightweight and fast.

**HTTP Methods (GET, PUT, POST, DELETE)**
Standard HTTP request methods used in REST APIs, with GET and PUT being idempotent while POST is typically not.

## I

**Implicit Contract**
The hidden expectations and assumptions in API contracts that aren't explicitly documented but can break integration when changed.

**Internal Shared Libraries**
Reusable code libraries developed and maintained within an organization to promote consistency and reduce duplication across projects.

**Identity and Access Management (IAM)**
A comprehensive system for managing user identities and controlling access to resources across an organization.

**Idempotency**
A property where the same operation can be performed multiple times without changing the result beyond the initial application, essential for safe HTTP operations.

**Ignore Culture**
An anti-pattern where problems are consistently ignored over time, making it acceptable to overlook warnings and anti-patterns.

**IP Hash (Load Balancing)**
An algorithm using the client's IP address to determine which server handles the request.

## J

**Jitter**
Adding randomness to retry wait times to prevent synchronized retries from multiple clients.

## K

**Keyset Pagination**
A pagination method using values of the last item in the current page to determine the next page's starting point.

## L

**Latency Distribution Metrics**
Metrics measuring response time distribution for upstream and downstream dependencies.

**LaunchDarkly**
A commercial feature flag management service providing advanced targeting and experimentation capabilities.

**Leaky Contracts**
An anti-pattern where service contracts expose internal implementation details, making it difficult to evolve services without breaking clients.

**Least Connections (Load Balancing)**
An algorithm that directs traffic to the server with the fewest active connections.

**Least Recently Used (LRU)**
A cache eviction strategy that removes the least recently accessed items when the cache is full.

**Load Balancer**
A service that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.

## M

**Message ID (Correlation ID)**
A unique identifier for each message or request that is passed through downstream services to enable traceability and debugging.

**Metric-Based Load Balancing**
A load balancing algorithm that distributes traffic based on real-time metrics like CPU usage, memory consumption, or response times.

**Microservices (Pattern)**
An architectural pattern dividing systems into small, independently deployable services.

**MinIO**
An open-source object storage system compatible with Amazon S3 API, often used as a self-hosted alternative to AWS S3.

**Multi-Track Agile**
An agile development approach that runs multiple parallel tracks for different types of work, balancing discovery, delivery, and technical excellence.

**Monthly Review**
A practice of reviewing the entire codebase monthly to understand architectural concepts, code quality trends, and patterns.

**Move Fast vs Do It Right Dilemma**
The tension between rapid iteration and delivery versus quality and stability.

**Multi-Factor Authentication (MFA)**
An authentication method requiring multiple verification factors.

## N

**Null Validations**
A defensive programming practice of checking for null or undefined values before accessing or manipulating data to prevent runtime errors.

## O

**OAuth Tokens**
Security tokens used in OAuth protocol for authorization, allowing applications to access resources on behalf of users without exposing credentials.

**Observability**
A system property enabling understanding of how a system behaves in production and detecting issues before they impact users.

**Offset-Based Pagination**
A pagination method where the client specifies an offset (starting point) and limit (number of items).

**Open Source First**
A philosophy of making open source the default choice and avoiding proprietary software.

**Optimistic Locking**
A concurrency control strategy that assumes conflicts are rare, allows multiple transactions concurrent access, and checks for conflicts only at commit time.

**OSI Model (Layers)**
A reference model dividing network communication into 7 layers, used to describe where different services operate.

**Overall Architecture Diagram**
A visual representation showing the big picture of how services communicate and main components.

## P

**Pagination**
A technique for breaking large datasets into smaller chunks (pages) that can be retrieved one at a time.

**Partition**
A way of dividing a dataset into subsets where every element belongs to exactly one subset, used to improve performance and efficiency in distributed computing.

**Pessimistic Locking**
A concurrency control strategy that assumes conflicts will occur and locks resources for exclusive access when a transaction begins.

**Point-to-Point Pattern**
A messaging pattern where messages are sent directly from one sender to one specific receiver in a queue.

**Policy as Code**
An authorization approach where policies are expressed as code.

**Policy-Based Access Control (PBAC)**
An authorization model that uses policies to define what users or systems can do.

**Proof of Concepts (PoCs)**
A technique to explore problems and technologies before producing the design.

**Publish/Subscribe Pattern**
A messaging pattern where publishers send messages to topics and subscribers express interest in specific topics to receive all published messages.

## Q

**Queue**
A data structure following First In First Out (FIFO) principle used in distributed systems for asynchronous processing and load balancing.

## R

**Random Load Balancing**
A load balancing algorithm that randomly selects a server for each request, providing simple distribution without state tracking.

**Rate Limiting**
A technique controlling the rate at which requests are processed to avoid overwhelming systems.

**Rendering Logic**
Application logic that prepares and formats data for presentation to specific clients, often placed in BFF layers to keep backends generic.

**Retrospectives**
A practice where teams regularly reflect on their processes and performance to identify improvements and celebrate successes.

**Reading Code**
A practice where architects regularly read and analyze system code, library code, and framework code.

**Refactoring**
The process of restructuring code without changing its external behavior, essential for maintaining architecture.

**Request-Reply Pattern**
A messaging pattern where a sender sends a message and waits for a response from the receiver.

**Requirements as Immutable (Anti-Pattern)**
Treating requirements as fixed and unchangeable rather than viewing them as temporary decisions that evolve.

**Retry**
A technique used in distributed systems to handle transient failures by attempting an operation multiple times before giving up.

**Role-Based Access Control (RBAC)**
An authorization model that assigns permissions based on user roles rather than individual users.

**Round Robin (Load Balancing)**
An algorithm that distributes requests sequentially across servers.

## S

**Scalability**
A property enabling systems to handle growth and load efficiently, also applies to engineering teams working in parallel.

**Schema Evolution**
The practice of changing data structures, API contracts, or message formats over time while maintaining compatibility with existing clients and services.

**Security**
Implementation of measures to protect systems from threats such as unauthorized access and data breaches.

**Shadow Reading**
A migration strategy where new systems read and process data in parallel with old systems without affecting production, allowing validation before cutover.

**Sequence/State Diagrams**
UML diagrams useful for understanding how a system works internally and how data flows through it.

**Server Sent Events (SSE)**
A technology for pushing updates from server to client.

**Service Oriented Architecture (SOA)**
A architectural approach treating services as first-class citizens, enabling isolation, independence, and flexibility.

**Session Persistence**
A load balancer feature ensuring a client's requests go to the same backend server.

**Single Sign-On (SSO)**
An authentication method allowing users to access multiple systems with one login.

**Split**
A commercial feature flag and experimentation platform for controlled feature rollouts and A/B testing.

**S3 (Amazon Simple Storage Service)**
AWS object storage service, sometimes used as an anti-pattern when treated as a distributed monolith for all data storage needs.

**Single Source of Truth (SSOT)**
The concept of designating one authoritative database or system as the definitive source for a particular piece of information in distributed systems.

**SSL Termination**
A load balancer feature that handles SSL/TLS encryption/decryption.

**Stability**
A state where systems are not broken frequently, with passing builds, tests, successful deployments, and managed technical debt.

**Stagnation**
An anti-pattern where architects stop learning and updating their knowledge, leading to outdated approaches.

**State of the Art**
A principle of using the latest versions and best solutions available rather than deprecated technologies.

**Stateful Services**
Services that maintain state information across multiple requests, more complex but necessary for scenarios like user sessions or transactions.

**Stateless Services**
Services that do not retain information about previous interactions; any necessary state is stored in external systems like databases or caches.

## T

**Tactical Programming**
A short-term focused programming approach prioritizing immediate features over long-term design quality, often leading to technical debt.

**Tech Debt First**
An anti-pattern where bad decisions are made as the default choice instead of maintaining technical principles.

**Technical Principles**
Non-negotiable architectural standards and guidelines that define acceptable approaches to system design and implementation.

**Testing in Production**
A practice of validating system behavior and performance with real production traffic and data, using techniques like canary releases and feature flags.

**Tech Debt Plague**
An anti-pattern where technical debt accumulates unchecked and architects fail to fight technical debt continuously.

**Thundering Herd Problem**
A situation where multiple clients simultaneously retry an operation, causing a sudden surge in requests that overwhelms the system.

**Time-to-Live (TTL)**
A cache management technique where items are assigned a lifespan after which they are automatically removed.

**Tokenization**
A security technique that replaces sensitive data with non-sensitive tokens, reducing the risk of data exposure while maintaining data utility.

## U

**Unleash**
An open-source feature flag management platform providing feature toggle capabilities and gradual rollouts.

## W

**Weighted Round Robin**
A load balancing algorithm variant that distributes requests based on assigned weights, directing more traffic to more powerful servers.

**Webhook**
An HTTP endpoint used to notify internal/external services when certain events occur.

**WebSockets**
A technology for real-time bidirectional communication between client and server.

**Write Ahead Log (WAL)**
A database durability technique where changes are first written to a sequential log before being applied to the database, ensuring recoverability.

**Working in the Trenches (Gemba)**
A practice based on the Lean principle of "going to the real place" where work is done to understand processes and identify improvements.

**Write-Back Cache**
A cache strategy where data is written to the cache first and then to underlying storage at a later time.

**Write-Through Cache**
A cache strategy where data is written to both the cache and underlying storage simultaneously.

## Z

**Zero-Downtime Deployment**
A deployment strategy enabling schema changes without service interruption.
