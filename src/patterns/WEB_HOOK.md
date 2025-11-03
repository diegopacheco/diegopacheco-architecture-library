# Webhook

A [webhook](https://en.wikipedia.org/wiki/Webhook) is just an endpoint in an API or REST server. A webhook is used to notify internal/external services when certain events happen. 

When an event occurs, the server makes an HTTP request (usually a POST request) to the specified URL of the web hook, sending relevant data about the event.

Web hooks are commonly used for:
* **Real-time notifications**: Informing external systems about events as they happen.
* **Data synchronization**: Keeping data in sync between different systems.
* **Integrations**: Connecting different services and automating workflows.

* **Event-driven architectures**: Triggering actions in response to specific events.

Webhooks do not require special technology. You can apply them with any backend technology that can handle HTTP requests.

## Why you need to know this?

Webhooks are interesting pattern for 2 common scenarios:

1. You are doing async processing and want to notify another system when the processing is done. Lets say the other system is external. So this prevent the need for polling. Same pattern can be applied for internal systems as well.

2. You want to integrate with 3rd party systems that support webhooks to get notified about events happening in those systems. For example, you can use webhooks to get notified about new orders in an e-commerce platform or new issues in a project management tool. Being event driven is always better than polling.