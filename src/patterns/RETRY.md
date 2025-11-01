# Retry

[Retry](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) is a technique used in distributed systems to handle transient failures by attempting an operation multiple times before giving up. This approach is particularly useful in distributed systems, where network issues or temporary unavailability of services can lead to failures that may be resolved with subsequent attempts.

## Timeouts

When implementing retries, it is important to set appropriate timeouts for each attempt. A timeout defines how long the system should wait for a response before considering the attempt a failure. Setting too short a timeout may lead to unnecessary retries, while too long a timeout can delay the overall operation.

## Progressive Backoff

Progressive backoff is a strategy used to increase the wait time between successive retry attempts. This approach helps to reduce the load on the system and increases the chances of success in subsequent attempts. Common backoff strategies include:
- **Fixed Backoff**: A constant wait time between retries.
- **Exponential Backoff**: The wait time increases exponentially with each retry attempt.
- **Jitter**: Adding randomness to the wait time to prevent synchronized retries from multiple clients.

## Thundering Herd Problem

The thundering herd problem occurs when multiple clients simultaneously retry an operation after a failure, leading to a sudden surge in requests that can overwhelm the system. To mitigate this issue, techniques such as jitter in backoff strategies and limiting the number of concurrent retries can be employed.

## Why you need to know this?

Everytime you make a call, does not matter if the service is internal or external you want combine retries with timeouts and progressive backoff to make your system more resilient to transient failures. This is especially important in distributed systems where network issues and service unavailability are common.

Everysingle call to AWS is the same principle, the good news is that AWS SDKs already implement retries with timeouts and progressive backoff for you, so you just need to configure them properly.