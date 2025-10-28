# Observable

As an architect, the systems you produce must have the ability to be observable. Such property is very important. Consider [observability](https://diego-pacheco.blogspot.com/2020/04/observability-domain-observability-from.html) a subset of [testing](https://diego-pacheco.blogspot.com/2020/02/going-faster-with-testing.html) which happens in production.

If you do not know what is going on, you are driving in the dark. You want to be able to understand how your system behaves in production, and be able to detect issues before they become problems for your users.

Without such understanding, you are not doing the whole cycle correctly. Building something following a design is not enough. You need to observe the final product in production, and be able to learn from it and improve it.

Making Observable systems implies having:
* Proper Logging
* Exposing custom application metrics
* Latency distribution metrics for upstream and downstream dependencies
* Proper Message IDs
* The practice of looking at production monitoring dashboards and logs as part of your daily routine and retrofitting the learnings to the engineering team