# Tech Debt Plague

Tech debt is a [plague](https://diego-pacheco.blogspot.com/2020/01/breaking-debt-cycle.html). It is something that all companies suffer from. It is normal to have tech debt. What is not correct is architects not fighting tech debt constantly. Tech debt must be fought all the time, either by simplifying requirements to avoid feature bloat, or by making better decisions that lead to better systems.

When I was thinking about this section, I was thinking in terms of ["Tech Debt First"](https://diego-pacheco.blogspot.com/2024/04/tech-debt-first.html). Because often I see tech debt being the "default choice," which is an anti-pattern. Some technical principles should be non-negotiable.

Imagine you are building a house. Pretty sure the buyer does not expect the house to collapse 6 months later after buying it. To cut corners, you would not decide to use paper for walls, styrofoam for the roof, and direct sunlight for electricity. However, when we build software, bad management, bad architects, and bad developers decide to cut corners to the point of making the software collapse after a few months of being in production.

One classical example is skipping tests. Tests are not nice to have, they are a must have. If you do not have tests, you are building a house without a foundation. You can build it fast, but sooner or later it will collapse. How will you do refactoring without tests? Management often pushes for such bad practices, but [even architects (the bad ones)](https://diego-pacheco.blogspot.com/2020/06/dont-outsmart-hard-chooses-why.html) push for that. Tests are non-negotiable.

You must fight the war, [manage](https://diego-pacheco.blogspot.com/2025/01/quality-needs-to-be-managed.html) [complexity](https://diego-pacheco.blogspot.com/2021/06/thoughts-on-internal-complexity.html) by doing improvements with the engineering team every week rather than "creating a jira ticket" that will never ever be addressed.