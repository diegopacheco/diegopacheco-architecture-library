# Pessimistic vs Optimistic Locking

When dealing with concurrent access to shared resources, two primary locking strategies can be employed: [pessimistic locking](https://en.wikipedia.org/wiki/Lock_(computer_science)) and [optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control).

**Pessimistic locking**: assumes that conflicts will occur and therefore locks the resource for exclusive access when a transaction begins. This approach is suitable for environments with high contention, as it prevents other transactions from modifying the resource until the lock is released. However, it can lead to reduced concurrency and potential deadlocks.

**Optimistic locking**: assumes that conflicts are rare and allows multiple transactions to access the resource concurrently. Instead of locking the resource, it checks for conflicts only when a transaction attempts to commit changes. If a conflict is detected, the transaction is rolled back and can be retried. This approach is more efficient in low-contention environments, as it maximizes concurrency and minimizes locking overhead.

Optimistic locking is often implemented using versioning, where each resource has a version number that is checked and updated during transactions. If the version number has changed since the transaction began, it indicates a conflict.

## Why you need to know this?

Understanding the differences between pessimistic and optimistic locking is crucial for designing systems that handle concurrent access to shared resources effectively. Choosing the right locking strategy can significantly impact system performance, scalability, and user experience.

Pessimits locking is better when:
- High contention for resources is expected.
- The cost of rolling back transactions is high.

Optimistic locking is better when:
- Contention for resources is low.
- The cost of rolling back transactions is low.
- High concurrency is desired.

It's very appealing to just use optimistic locking everywhere. However there are scenatios where you should have none. For instance, you classical example. It's an anti-pattern but happen a lot, React applications on the frontend might not be fully tested and might have many re-renderings causing many requests to be sent to the bbackend. In such scenario optimistic locking can cause a lot of pain and will be unnecessary overhead. In such scenario, just do nothing and rely on last write wins strategy or just pig bank on ACID properties.

Ofcourse it really dependends on what the application does and the criticallity of the transaction. But the React scenario is not hypothetical, I've seen it happen many times in real life. Also if the frontend did not implement a time based debounce mechanism, the user might have a nervous finger and click multiple times on a button causing multiple requests to be sent to the backend. In such scenario optimistic locking will just add unnecessary pain and false positives.