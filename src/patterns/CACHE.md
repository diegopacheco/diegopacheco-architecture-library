# Cache

A [cache](https://en.wikipedia.org/wiki/Cache_(computing)) is a software component that stores data so that future requests for that data can be served faster. Caches are commonly used to improve performance and reduce latency in various applications, including web browsers, databases, and operating systems.

## Types of Caches

1. **Memory Cache**: Stores frequently accessed data in RAM for quick retrieval.
2. **Disk Cache**: Stores data on a hard drive or SSD to reduce access times for frequently used files.
3. **Web Cache**: Stores web pages and resources to reduce bandwidth usage and load times.
4. **Database Cache**: Caches query results to speed up database access.
5. **CPU Cache**: A small-sized type of volatile memory that provides high-speed data access to the processor.

## Cache Strategies

1. **Write-Through Cache**: Data is written to both the cache and the underlying storage simultaneously.
2. **Write-Back Cache**: Data is written to the cache first and then to the underlying storage at a later time.
3. **Least Recently Used (LRU)**: Evicts the least recently accessed items when the cache is full.
4. **First In First Out (FIFO)**: Evicts the oldest items first when the cache is full.
5. **Time-to-Live (TTL)**: Items in the cache are assigned a lifespan, after which they are automatically removed. 

## Cache Invalidation

Cache invalidation is the process of removing or updating cached data when it becomes stale or outdated. Common strategies include:
1. **Manual Invalidation**: Explicitly removing or updating cache entries.
2. **Automatic Invalidation**: Using TTL or other mechanisms to automatically remove stale data.
3. **Event-Driven Invalidation**: Invalidating cache entries based on specific events, such as data updates.

## Why you need to know this?

This pattern should be used often. However you need make sure you always have an invalidation mechanism in place to avoid serving stale data. Usually the most simple invalidation mechanism is to use a Time-to-Live (TTL) strategy, where cached data is automatically removed after a certain period. Imagine the cache expires after 2h or something like that.

Backend system should have cache to protect from database latency in case of slow queries or high traffic. Even if you call a downstream dependency that is slow, or a 3rd party API which is also slow you should cache as much as possible.

This pattern not only reduce latency but improves the user experience as well. IF the users see everything happens pretty fast they will be more happy rather than if everything is slow. But you might argue, OH, the first call will always be slow. Well for that case you can pre-warm the cache and make the call before the user need.