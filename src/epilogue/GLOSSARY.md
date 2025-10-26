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

**Build vs Buy Dilemma**
The decision between building solutions in-house for core business advantages or buying external solutions.

## C

**Cache**
A software component storing data for faster future access, commonly used in web browsers, databases, and operating systems.

**Chaos Engineering**
A practice of inducing and provoking failure in systems and infrastructure to prove system tolerance and recovery.

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

**Forward Compatibility**
When old code can read data written by new code, allowing old services to safely ignore new fields they don't understand.

**Full Text Search**
A search capability like OpenSearch or Elasticsearch for searching large product catalogs.

## I

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

**Least Connections (Load Balancing)**
An algorithm that directs traffic to the server with the fewest active connections.

**Least Recently Used (LRU)**
A cache eviction strategy that removes the least recently accessed items when the cache is full.

**Load Balancer**
A service that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.

## M

**Message ID (Correlation ID)**
A unique identifier for each message or request that is passed through downstream services to enable traceability and debugging.

**Microservices (Pattern)**
An architectural pattern dividing systems into small, independently deployable services.

**Monthly Review**
A practice of reviewing the entire codebase monthly to understand architectural concepts, code quality trends, and patterns.

**Move Fast vs Do It Right Dilemma**
The tension between rapid iteration and delivery versus quality and stability.

**Multi-Factor Authentication (MFA)**
An authentication method requiring multiple verification factors.

## O

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

**Rate Limiting**
A technique controlling the rate at which requests are processed to avoid overwhelming systems.

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

**Tech Debt First**
An anti-pattern where bad decisions are made as the default choice instead of maintaining technical principles.

**Tech Debt Plague**
An anti-pattern where technical debt accumulates unchecked and architects fail to fight technical debt continuously.

**Thundering Herd Problem**
A situation where multiple clients simultaneously retry an operation, causing a sudden surge in requests that overwhelms the system.

**Time-to-Live (TTL)**
A cache management technique where items are assigned a lifespan after which they are automatically removed.

## W

**Webhook**
An HTTP endpoint used to notify internal/external services when certain events occur.

**WebSockets**
A technology for real-time bidirectional communication between client and server.

**Working in the Trenches (Gemba)**
A practice based on the Lean principle of "going to the real place" where work is done to understand processes and identify improvements.

**Write-Back Cache**
A cache strategy where data is written to the cache first and then to underlying storage at a later time.

**Write-Through Cache**
A cache strategy where data is written to both the cache and underlying storage simultaneously.

## Z

**Zero-Downtime Deployment**
A deployment strategy enabling schema changes without service interruption.
