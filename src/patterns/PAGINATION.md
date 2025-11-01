# Pagination

When you have an endpoint that returns a large list of items, it is often useful to [paginate](https://www.merge.dev/blog/rest-api-pagination) the results. This means breaking the results into smaller chunks, or "pages", that can be retrieved one at a time.

Basic benefit here is to reduce the amount of data transferred in a single request, which can improve performance and reduce load on the server. Less latency and more responsive applications are the end result.

## Pagination Strategies

1. **Offset-Based Pagination**: This is the most common method, where the client specifies an offset (the starting point) and a limit (the number of items to return). For example, `GET /items?offset=20&limit=10` would return items 21-30.
2. **Cursor-Based Pagination**: Instead of using an offset, this method uses a cursor (a unique identifier for a specific item) to mark the starting point for the next page of results. For example, `GET /items?cursor=abc123&limit=10` would return the next 10 items after the item with the cursor `abc123`.
3. **Page Number Pagination**: This method uses page numbers to specify which page of results to return. For example, `GET /items?page=2&limit=10` would return the second page of results, with 10 items per page.
4. **Keyset Pagination**: This method uses the values of the last item in the current page to determine the starting point for the next page. For example, if the last item on the current page has an ID of 50, the next request might be `GET /items?after_id=50&limit=10`.

## Why you need to know this?

When not do pagination?

If a system needs process analytical transformations for reporting, aggregation, forecasting or even for machine learning workloads, in that case we are dealing with a big data scenario where we need a different stack and different solutions for this problem, we would not paginate in this case. We would use patterns like CDC (Change Data Capture) to stream data into a data warehouse or data lake, and then use specialized tools to process and analyze the data. Event Sourcing with Kafka + stream processing(kafka streams, flink or spark) could be another way to handle this problem.

When do pagination?

Every time you have a lot of data. You need to be careful with `findAll` or `Select *` queries that can return a lot of data at once. This can lead to performance issues, timeouts, and high memory usage. Also the client cannot make sense of all this data at once, so in that scenarios always use pagination.


