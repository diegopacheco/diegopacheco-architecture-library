# API GATEWAY

It's an architecture pattern that acts as a single entry point for a set of microservices, handling requests by routing them to the appropriate service, aggregating responses, and performing cross-cutting tasks such as authentication, logging, and rate limiting.

## API Gateway vs Load Balancer

An [API Gateway](https://en.wikipedia.org/wiki/API_management) and a Load Balancer serve different purposes in a microservices architecture:
- **API Gateway**: Primarily focuses on managing and routing API requests. It handles tasks such as request transformation, response aggregation, authentication, and rate limiting. It operates at the application layer (Layer 7) of the OSI model.

- **Load Balancer**: Primarily focuses on distributing incoming network traffic across multiple servers to ensure high availability and reliability. It operates at both the transport layer (Layer 4) and application layer (Layer 7) of the OSI model, depending on the type of load balancer used.

## Key Features

- **Request Routing**: Directs incoming requests to the appropriate microservice based on the request path, method, or other criteria.
- **Response Aggregation**: Combines responses from multiple microservices into a single response to the client.
- **Cross-Cutting Concerns**: Manages common functionalities such as authentication, logging, rate limiting, and caching.
- **Protocol Translation**: Converts requests and responses between different protocols (e.g., HTTP to WebSocket).
- **Load Balancing**: Distributes incoming requests across multiple instances of a microservice to ensure high availability and reliability.

## Why you need to know this?

Because there are 3 common scenarios where, using API gateway is the right thing to do:

1. **Exposing Public facing APIs**: When we need to expose an API to the the world, an API gateway is a must have. It will help us to manage security, rate limiting, logging, monitoring, etc.
2. **Cross Cloud Communication**: Let's say you have 2 departments in your company, one is in AWS and the other in Azure. You can use an API gateway to manage the communication between both clouds, handling security, routing, etc.
3. **Migrations**: When migrating from a monolith to microservices, an API gateway can help to manage the transition, routing requests to the monolith or the new microservices as needed.