# ACID
[ACID](https://en.wikipedia.org/wiki/ACID) is a property of database transactions intended to guarantee validity even in the event of errors or power failures. It is a relational database concept.

## A == Atomicity
Atomicity ensures that a transaction is treated as a single unit, which either completely succeeds or completely fails. 

If any part of the transaction fails, the entire transaction is rolled back, and the database remains unchanged.

## C == Consistency
Consistency ensures that a transaction brings the database from one valid state to another valid state, maintaining all predefined rules, such as constraints, cascades, and triggers.

## I == Isolation
Isolation ensures that concurrent transactions do not interfere with each other. The intermediate state of a transaction is invisible to other transactions until the transaction is committed.

This prevents transactions from reading uncommitted data from other transactions, which could lead to inconsistencies.

## D == Durability
Durability guarantees that once a transaction has been committed, it will remain so, even in the event of a system failure. Committed data is saved to non-volatile storage, ensuring that it is not lost. Usually using a WAL (Write Ahead Log) to achieve this.

## Why you need to know this?

1. Relational databases like PostgreSQL, MySQL, Oracle are ACID.
2. Non-relational databases like DynamoDB, Cassandra or Redis are not ACID.
3. Knowing that your database has ACID properties allows you to design simple systems because you can rely on ACID properties.

Let's say you want to write a system where only one user can rent a car. You probably can think of some complex solution with locks. However you don't need that because you can simply rely on the ACID properties. If two users try to insert the rental at the same time, one will succeed and the other will fail. So ACID allows your code to be simple.