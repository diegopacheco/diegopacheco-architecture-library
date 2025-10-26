# Observable

As architect, the systems you produce must have the ability to be observable. Such property is very important. Consider [observability](https://diego-pacheco.blogspot.com/2020/04/observability-domain-observability-from.html) a sub-set of [testing](https://diego-pacheco.blogspot.com/2020/02/going-faster-with-testing.html) which happens in production. 

IF you dont know whats going on you are driving into the dark. You want to be able to understand how your system behaves in production, and be able to detect issues before they become problems for your users.

Without such understanding, you are not doing the whole cycle correctly. Building something following a design is not enought. You need to observe the final product in production, and be able to learn from it and improve it.

Making Observable systems, imply in having:
* Proper Logging
* Exposing custom application metrics
* Have latency distribution metrics for upstream and doewnstream dependencies.
* Having proper Message Ids.
* Having the pratice of look the production monitoring dashboards and logs as part of your daily routine and retrofit the learnings to the engineering team.