# Message Patterns

There are [different](https://en.wikipedia.org/wiki/Messaging_pattern) ways to structure message communication between systems.

## Publish/Subscribe Pattern

Publishers send messages to a topic or channel without knowing who will receive them. Subscribers express interest in specific topics and receive all messages published to those topics.

Pub/Sub Nature:
- **One-to-Many**: A single message can be delivered to multiple subscribers.
- **Decoupling**: Publishers and subscribers don't need to know about each other.
- **Dynamic Subscription**: Subscribers can join or leave at any time.
- **Topic-Based**: Messages are organized by topics or channels.

Pub/Sub Use cases:
* Real-time notifications across multiple services
* Event-driven architectures where multiple consumers need the same data
* Log aggregation and monitoring systems

## Point-to-Point Pattern

Messages are sent directly from one sender to one specific receiver. Messages are typically placed in a queue where they are consumed by a single consumer.

P2P:
- **One-to-One**: Each message is consumed by exactly one receiver.
- **Message Ordering**: Messages are typically processed in the order they arrive.
- **Load Distribution**: Multiple consumers can read from the same queue for load balancing.
- **Guaranteed Delivery**: Messages remain in the queue until successfully processed.

P2P Use cases:
* Task distribution among worker nodes
* Request-response communication between services
* Sequential processing of transactions
* Background job processing

## Request-Reply Pattern

A pattern where a sender sends a message and waits for a response from the receiver. The sender includes a reply-to address in the message so the receiver knows where to send the response.
This pattern combines aspects of both synchronous and asynchronous communication, allowing for non-blocking request-response interactions.

## Message Ordering

Message ordering guarantees vary by pattern and implementation:
- **FIFO Ordering**: Messages are processed in the order they are sent.
- **Partition Ordering**: Messages within the same partition maintain order.
- **No Ordering**: Messages may be processed in any order for maximum throughput.

## Why you need to know this?

Basicaly there is 2 common secnario you want use such patterns.

1. You have multiple services that need to communicate with each other in a decoupled way. In this case you will use Publish/Subscribe pattern. Such pattern allow async communication and multiple services can listen to the same event. Ideally for event-driven architectures. For instance using Kafka topics or similar messaging systems.

2. You have a task that needs to be processed by a single service or worker. In this case you will use Point-to-Point pattern. Such pattern ensure that only one service will process the message. Ideal for task distribution and load balancing. For instance using AWS SQS or RabbitMQ.