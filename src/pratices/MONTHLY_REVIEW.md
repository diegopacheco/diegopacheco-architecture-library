# Monthly Review

[Code review](https://diego-pacheco.blogspot.com/2019/11/getting-best-out-github-with-remote.html) is great. Architects should do [Code review](https://diego-pacheco.blogspot.com/2018/07/lessons-learned-and-experiences-doing.html). However code review is pretty much focused on deltas. Which is not the whole story.

Code review happens in-cycle, meaning every week, every day, or pretty much every time a ticket/PR is done. We also need an off-cycle review.

As an architect, 1x per month or at least 1x per quarter you should look at the whole codebase. Why? Because then you are not looking at the [deltas](https://diego-pacheco.blogspot.com/2022/12/beyond-code-deltas.html), you are looking at the whole picture and seeing the [design](https://diego-pacheco.blogspot.com/2011/04/team-code-review-design-sessions.html).

Such practice is important to see:
* Architectural concept drift: Are we still following the intended architecture? Are there parts of the code that have diverged from the original design principles?
* Code quality trends: Is the overall code quality improving or deteriorating? Are there areas that need refactoring or technical debt reduction?
* Consistency: Are coding standards and best practices being followed consistently across the codebase?
* New patterns and anti-patterns: Are there new design patterns emerging that could be beneficial? Are there anti-patterns that need to be addressed?
* Testing Diversity: Is the test coverage adequate? Are there areas that lack sufficient testing? Do we need new forms of testing and induction?