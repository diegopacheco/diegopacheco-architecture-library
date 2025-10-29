# IDEMPOTENCY

It is an interesting property that allows the same operation to be performed multiple times without changing the result beyond the initial application.

In REST APIs, idempotency is an important concept, especially for HTTP methods. Common idempotent HTTP methods include GET, HEAD, OPTIONS, TRACE, and PUT.

- **GET**: The most famous and common Idempotent. Retrieving a resource multiple times does not change its state.

[Idempotency](https://en.wikipedia.org/wiki/Idempotence) is important because if the same request arrives twice (there are no side effects), the server can safely ignore the second request or return the same result as the first one without any unintended consequences, or just re-process the same thing again without issues.

Such principle keeps us from writing complex software. For instance, if a GET operation also does inserts and deletes, we would have to handle the case where the same GET request is sent multiple times, which could lead to data inconsistency and unexpected behavior.

So we want to honor the idempotency principle to keep our software simple and predictable.