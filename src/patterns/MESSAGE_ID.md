# Message Id

[Message ID](https://en.wikipedia.org/wiki/Message-ID) Also known as CORRELATION_ID. The idea that each message or request must have a unique id, and you will pass down such id into the downstream services. Via headers or other means. When you log anything you also log the MESSAGE_ID.

## Why this is important?

* Traceability: When you have a unique MESSAGE_ID for each request, you can trace the entire lifecycle of that request across multiple services. This is especially useful in microservices architectures where a single user action may trigger multiple service calls.
* Debugging: If an error occurs, having a MESSAGE_ID allows you to quickly locate all logs and events related to that specific request. This can significantly speed up the debugging process.
* Monitoring: MESSAGE_IDs can be used to monitor the performance of requests as they pass through different services.

Without a MESSAGE_ID, it becomes impossible to debug distributed systems.

## Why you need to know this?

Every time you have services and distributed systems you must implement this pattern. If you are using messaging or kafka you also must implement this pattern. Otherwise it's impossible to debug issues in distributed systems.