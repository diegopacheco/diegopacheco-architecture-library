# Diego Pacheco's Software Architecture Library

<img src="cover.png" width="400">

This repository contains a curated collection of concepts, guidance about Software Architecture by Diego Pacheco.

I wrote this book because I'm doing sfotware srchitecture for more than 20+ yearrs and I want to share with other architects and wanna-be architects my philosophy, pratices, and import concepts and patterns you sohuld know. This also it's an experiment. It's a live piece of advices that I want to improve over time.

## What to Expect

* Honest and direct advice
* Highly opinionated content
* Practical and actionable guidance

## What this book is NOT

* Not a tutorial or step-by-step guide
* It's not a panacea for all architecture problems

## Table of Contents

1. Philosophy:
- [Crystall Ball](philosofy/CRYSTAL_BALL.md) - Think about future changes
- [Defensive Programming](philosofy/DEFENSIVE.md) - Anticipating and handling errors
- [Doing Hard Things](philosofy/DOING_HARD_THINGS.md) - Tackling complex problems head-on
- [Frontend vs Backend](philosofy/FRONTEND_VS_BACKEND.md) - Design philosophy differences
- [Open Source First](philosofy/OSS.md) - Favor open source solutions always
- [Service Orientation](philosofy/SO.md) - Services as first-class citizens
- [Protect Your Time](philosofy/PROTECT_YOUR_TIME.md) -
Strategies for architects to safeguard time for deep work

2. Anti-Patterns:
- [Tech Debt Plague](anti-patterns/TECH_DEBT_PLAGUE.md) - Fighting technical debt constantly
- [Ignore Culture](anti-patterns/IGNORE_CULTURE.md) - Addressing ignored problems proactively
- [Stagnation](anti-patterns/STAGNATION.md) - Constant learning to avoid stagnation

3. Pratices:
- [Attention to Detail](pratices/ATTENTION_TO_DETAIL.md) - Architect with precision and care
- [Architecture Review](pratices/ARCH_REVIEW.md) - Documenting architecture for communication and improvements
- [Design First](pratices/DESIGN_FIRST.md) - Think first, act later
- [Ownership](pratices/OWNERSHIP.md) - Extreme ownership and proactive behavior for architects
- [Reading Code](pratices/READING_CODE.md) - Importance of reading code as an architect
- [Monthly Review](pratices/MONTHLY_REVIEW.md) - See the whole picture.
- [Working on Trenches](pratices/WORKING_ON_TRENCHES.md) - Hands-on, front-line work with the team.

4. Concepts:
- [ACID](concepts/ACID.md) - Relational database transaction properties
- [Authentication & Authorization](concepts/AUTHENT.md) - Identity verification and access control
- [BASE](concepts/BASE.md) - NoSQL consistency model
- [Idempotency](concepts/IDEMPOTENCY.md) - Safe operation repetition
- [Optimistic vs Pessimistic Locking](concepts/OPLOCKING.md) - Concurrency control strategies
- [Partition](concepts/PARTITION.md) - Data distribution strategies
- [Schema Evolution](concepts/SCHEMA_EVOLUTION.md) - Forward/backward compatibility for APIs
- [Source of Truth](concepts/SOURCE_OF_TRUTH.md) - Authoritative data source
- [Stateless vs Stateful Services](concepts/STATELESS_VS_STATEFULL_SVC.md) - Service state management

5. Patterns:
- [API Gateway](patterns/API_GATEWAY.md) - Single entry point for microservices
- [BFF Pattern](patterns/BFF_PATTERN.md) - Backend for Frontend pattern
- [Cache](patterns/CACHE.md) - Data storage for faster access
- [Connection Pool](patterns/CONNECTION_POOL.md) - Database connection reuse
- [Feature Flags](patterns/FEATURE_FLAGS.md) - Runtime configuration and gradual rollouts
- [Load Balancer](patterns/LB.md) - Traffic distribution across servers
- [Message Patterns](patterns/MESSAGE_PATTERNS.md) - Publish/Subscribe, Point-to-Point messaging
- [Message Id](patterns/MESSAGE_ID.md) - Unique identifier for tracing requests
- [Pagination](patterns/PAGINATION.md) - Breaking large datasets into pages
- [Queue](patterns/QUEUE.md) - Asynchronous message processing
- [Retry](patterns/RETRY.md) - Handling transient failures with retry strategies
- [Web Hook](patterns/WEB_HOOK.md) - Event-driven HTTP callbacks