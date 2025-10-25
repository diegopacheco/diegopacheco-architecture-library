# Tech Debt Plague

Tech debt is a plague. It's something that all companies suffer. It's normal to have tech debt. What is not correct is architects not fighting tech debt. Tech debt must be fought all the time. Either by simplifying requirements to avoid feature bloat, or by making better decisions that lead to better systems.

When I was thinking about this section, I was thinking on the terms of "Tech Debt First". Because often I see tech debt being the "default choice", which is an anti-pattern. Some technical principles should be non-negotiable.

Imagine you are building a house, pretty sure the buyer does not expect the house to collapse 6 months later after buying it. So to cut corners you don't decide to use paper for walls, styrofoam for the roof and direct sunlight for electricity. However when we build software, bad management, bad architects and bad developers decide to cut corners to the point of making the software collapse after few months of being in production.

One classical example is skipping tests. Tests are not a nice to have, they are a must have. If you don't have tests, you are building a house without a foundation. You can build it fast, but sooner or later it will collapse. How will you do refactoring without tests?

You must fight the war, manage complexity by doing improvements with the engineering team every week rather than "creating a jira ticket" that will never ever be addressed.