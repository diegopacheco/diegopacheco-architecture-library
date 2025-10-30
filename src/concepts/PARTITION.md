# Partition

A **partition** of a set is a way of dividing the data set into subsets such that every element in the original set is included in exactly one of the subsets. In other words, a [partition](https://en.wikipedia.org/wiki/Partition_(database)) breaks down a set into distinct parts where no part shares any elements with another, and all parts together cover the entire original set.

Partition by:
* A specific column or set of columns
* A specific number of partitions
* A specific size of each partition
* A specific percentage of data in each partition
* A specific condition or rule
* A random distribution of data into partitions
* Consistent hashing for distributed systems

Partitions matter because they can significantly impact the performance and efficiency of data processing tasks. Proper partitioning can lead to faster query execution, reduced data shuffling, and improved resource utilization in distributed computing environments.

When designing partitions, consider factors such as data distribution, query patterns, and the underlying storage system to ensure optimal performance.

## Why you need to know this?

When you don't have a lot of data you can 100% survive without partitions. But as your data grows, partitions become crucial for maintaining performance and scalability. Proper partitioning can help you manage large datasets more effectively, improve query performance, and optimize resource usage.

Partitions are a MUST at Scale. Another scenario you want partition is when the data grows quickly, like a lot of data everyday, recurent batch jogs getting data non-stop. If you just updating data in place you are fine, but if you keep inserting data without partitions, you will quickly run into performance issues as the dataset grows larger.