# Queue

[Queue](https://en.wikipedia.org/wiki/Message_queue) is a data structure that follows the First In First Out (FIFO) principle. Elements are added to the back of the queue and removed from the front.

In distributed systems, queues are often used to manage tasks, messages, or data that need to be processed asynchronously. They help in decoupling different parts of a system, allowing for better scalability and fault tolerance.

Queues use cases are:

* **Asynchronous processing**: Tasks can be added to a queue and processed by worker nodes at their own pace.
* **Load balancing**: Distributing tasks across multiple workers to ensure no single worker is overwhelmed.
* **Message brokering**: Facilitating communication between different services or components in a system.
* **Rate limiting**: Controlling the rate at which tasks are processed to avoid overwhelming downstream systems.
* **Event sourcing**: Storing a sequence of events that can be processed later to reconstruct the state of a system.

Common Issues with Queues:
* **Message loss**: If a queue is not properly configured, messages may be lost during transmission or processing.
* **Duplicate messages**: In some cases, messages may be delivered more than once, leading to redundant processing.
* **Latency**: Queues can introduce delays in processing, especially if they become overloaded.
* **Backpressure**: If the rate of incoming messages exceeds the processing capacity, it can lead to increased latency and potential message loss.

## Why you need to know this?

Queues are very useful. In a couple of very common scenarios:

1. You want to do asynchronous processing: You can use an internal in-memory queue, or you can use an external queue, depending on your durability needs.
2. You want to decouple different parts of your system: Using a queue can help you achieve better scalability and fault tolerance. Because now if the receiver system is down, the sender still can send a message and receiver can process later, make the system more resilient.
3. Queues are present in any HTTP server implementation: Behind the scenes, most HTTP servers use queues to manage incoming requests and distribute them to worker threads or processes for handling. Understanding how queues work can help you optimize the performance and scalability of your web applications. Queue allow your systems to "breath" under high load.

However you always want monitor queue depth, arrival and processing rate to make sure your system is healthy. This a good metrics to always keep an eye on in any system using queues.