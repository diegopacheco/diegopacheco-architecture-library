# Diego Pacheco's Software Architecture Library

<img src="cover.png" width="400">

This repository contains a curated collection of concepts, guidance about Software Architecture by Diego Pacheco.

## Installing mdBook

Install mdBook using cargo:
```bash
cargo install mdbook
```

## Building the Book

This repository uses mdBook to generate a browsable book format.

Build the book:
```bash
mdbook build
```

Serve the book locally:
```bash
mdbook serve
```

Or use the convenience script:
```bash
./run.sh
```

The generated book will be in the `book/` directory.

## Versioning

The book version is displayed in the footer of each page. Current version is stored in the `VERSION` file.

To bump the version:
```bash
./bump-version.sh 1.1.0
```

This will update both the `VERSION` file and `theme/version.js`.

## Table of Contents

1. Philosophy:
- [Crystall Ball](src/philosofy/CRYSTAL_BALL.md) - Think about future changes
- [Defensive Programming](src/philosofy/DEFENSIVE.md) - Anticipating and handling errors
- [Doing Hard Things](src/philosofy/DOING_HARD_THINGS.md) - Tackling complex problems head-on
- [Frontend vs Backend](src/philosofy/FRONTEND_VS_BACKEND.md) - Design philosophy differences
- [Open Source First](src/philosofy/OSS.md) - Favor open source solutions always
- [Service Orientation](src/philosofy/SO.md) - Services as first-class citizens
- [Protect Your Time](src/philosofy/PROTECT_YOUR_TIME.md) - Strategies for architects to safeguard time for deep work

2. Anti-Patterns:
- [Tech Debt Plague](src/anti-patterns/TECH_DEBT_PLAGUE.md) - Fighting technical debt constantly
- [Ignore Culture](src/anti-patterns/IGNORE_CULTURE.md) - Addressing ignored problems proactively
- [Stagnation](src/anti-patterns/STAGNATION.md) - Constant learning to avoid stagnation

3. Pratices:
- [Attention to Detail](src/pratices/ATTENTION_TO_DETAIL.md) - Architect with precision and care
- [Architecture Review](src/pratices/ARCH_REVIEW.md) - Documenting architecture for communication and improvements
- [Design First](src/pratices/DESIGN_FIRST.md) - Think first, act later
- [Ownership](src/pratices/OWNERSHIP.md) - Extreme ownership and proactive behavior for architects
- [Reading Code](src/pratices/READING_CODE.md) - Importance of reading code as an architect
- [Monthly Review](src/pratices/MONTHLY_REVIEW.md) - See the whole picture.
- [Working on Trenches](src/pratices/WORKING_ON_TRENCHES.md) - Hands-on, front-line work with the team.

4. Concepts and Patterns:
- [ACID](src/concepts/ACID.md) - Relational database transaction properties
- [API Gateway](src/concepts/API_GATEWAY.md) - Single entry point for microservices
- [Authentication & Authorization](src/concepts/AUTHENT.md) - Identity verification and access control
- [BASE](src/concepts/BASE.md) - NoSQL consistency model
- [BFF Pattern](src/concepts/BFF_PATTERN.md) - Backend for Frontend pattern
- [Cache](src/concepts/CACHE.md) - Data storage for faster access
- [Connection Pool](src/concepts/CONNECTION_POOL.md) - Database connection reuse
- [Feature Flags](src/concepts/FEATURE_FLAGS.md) - Runtime configuration and gradual rollouts
- [Idempotency](src/concepts/IDEMPOTENCY.md) - Safe operation repetition
- [Load Balancer](src/concepts/LB.md) - Traffic distribution across servers
- [Message Patterns](src/concepts/MESSAGE_PATTERNS.md) - Publish/Subscribe, Point-to-Point messaging
- [Message Id](src/concepts/MESSAGE_ID.md) - Unique identifier for tracing requests
- [Optimistic vs Pessimistic Locking](src/concepts/OPLOCKING.md) - Concurrency control strategies
- [Pagination](src/concepts/PAGINATION.md) - Breaking large datasets into pages
- [Partition](src/concepts/PARTITION.md) - Data distribution strategies
- [Queue](src/concepts/QUEUE.md) - Asynchronous message processing
- [Retry](src/concepts/RETRY.md) - Handling transient failures with retry strategies
- [Schema Evolution](src/concepts/SCHEMA_EVOLUTION.md) - Forward/backward compatibility for APIs
- [Source of Truth](src/concepts/SOURCE_OF_TRUTH.md) - Authoritative data source
- [Stateless vs Stateful Services](src/concepts/STATELESS_VS_STATEFULL_SVC.md) - Service state management
- [Web Hook](src/concepts/WEB_HOOK.md) - Event-driven HTTP callbacks

