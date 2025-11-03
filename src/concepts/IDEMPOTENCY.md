# Idempotency

It is an interesting property that allows the same operation to be performed multiple times without changing the result beyond the initial application.

In REST APIs, idempotency is an important concept, especially for HTTP methods. Common idempotent HTTP methods include GET, HEAD, OPTIONS, TRACE, and PUT.

- **GET**: The most famous and common idempotent method. Retrieving a resource multiple times does not change its state.

[Idempotency](https://en.wikipedia.org/wiki/Idempotence) is important because if the same request arrives twice (there are no side effects), the server can safely ignore the second request or return the same result as the first one without any unintended consequences, or just re-process the same thing again without issues.

Such principle keeps us from writing complex software. For instance, if a GET operation also does inserts and deletes, we would have to handle the case where the same GET request is sent multiple times, which could lead to data inconsistency and unexpected behavior.

So we want to honor the idempotency principle to keep our software simple and predictable.

## Why you need to know this?

When you are designing and implementing REST APIS. Which pretty much is the bread and butter of all backend development nowadays. You must guarantee that your GET, HEAD, OPTIONS, TRACE and PUT methods are idempotent. This is not merely a rule of thumb, it is a must. Because your consumers/clients will expect that behavior from your API. If you break that expectation, you will have a bad time debugging and fixing issues that could be easily avoided by following the idempotency principle.

Secondly if you break idempotency you will have more complex code to maintain. Because you will have to handle edge cases and weird things, it will be harder to test, everything will be worse. So just follow the principle and keep your code simple.