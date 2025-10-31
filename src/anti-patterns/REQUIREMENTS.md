# Requirements

Mind blown by me saying ["Requirements"](https://diego-pacheco.blogspot.com/2021/01/requirements-are-dangerous.html) is an anti-pattern? Lean believes that requirements are just a decision that somebody made. Now what you need to ask yourself is, how good is this decision? Architecture is the art of making good decisions. Bad decisions COST a lot, not only money but also time, effort and frustration.

Architects `MUST` make good decisions. Good decisions are made when you have the right information, the right context, and the right experience. You must be prepared to make right decisions. In the beginning you will make mistakes, which is okay if you learn from them and that's why you need Architecture Review.

Not all requirements are anti-patterns, but seeing them as "requirements" is an anti-pattern per se. The word requirements, and often how people take it, implies that something is fixed, immutable, and unchangeable. In reality, requirements are always changing, evolving, and adapting to new circumstances. Good architects embrace change and adapt their decisions accordingly.

When a project starts, or when you start a task, it's very common that product did not think a lot about the consequences, trade-offs, corner cases, implications, or even what the engineering team needs to get it done. The most common anti-pattern is empty jira tickets and tons of meetings to push the "discovery work" to engineering.

There is nothing wrong with engineering collaborating with product, as long as we mark that as "Discovery work". The issue is, product pushes "not ready" tickets to development and asks: "Why is this not done yet?" then corners are cut, quality is compromised and technical debt is added. Remember the Tech Debt Plague and Ignoring culture, they are all connected.

You need to see requirements as "Temporary decisions", not as martial law. You need to deliver requirements, but you must challenge them, you must question them, and you must validate them. If you don't, you are just a delivery team, not an engineering team.

## Why you need to know this?

Everything you will do will be a requirement. Does not matter if people don't use this word, if people call it user stories, issues, tickets, tasks, jobs, experiences, it's all the same in the sense that you will have to deliver something that somebody else decided. So there are a couple of things you can do here to better handle requirements:
* Collaborate with product to help them think through the implications of their decisions.
* Collaborate with UX to understand user behavior and needs.
* Mark "discovery work" as such, and don't push it to engineering as "ready".
* Do POCs, which we call [spike](https://en.wikipedia.org/wiki/Spike_(software_development)), XP technique. To learn and then figure out requirements.
* Get code into production in order to validate requirements as soon as possible.
* Run experiments to validate requirements(assumptions).
* Research what the industry is doing to solve similar problems.