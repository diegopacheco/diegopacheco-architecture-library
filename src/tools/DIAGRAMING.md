# Diagramming

Architecture must be visual; it's important to have visual diagrams. In my humble opinion, there are at least 3 diagrams that are very, very useful for architects:
* [Overall Architecture](https://diego-pacheco.blogspot.com/2020/04/architecture-101-thinking-about-design.html) Diagram: You can see the big picture, you see how services talk to each other, you see the main components.
* [Class Diagram](https://diego-pacheco.blogspot.com/2020/10/uml-hidden-gems.html): Can be useful for 2 common scenarios. A) [Internal modeling](https://diego-pacheco.blogspot.com/2018/05/internal-system-design-forgotten.html) of a system or B) Modeling tables in a database.
* Sequence/state diagrams: Useful to understand how a system works internally, how data flows through the system. I would not have hundreds of these, the goal here is not to have one per UI. The goal is to have them for the most important and complex things.

The best paid diagram tool is [Lucidchart](https://www.lucidchart.com/). The best free diagram tool is [Diagrams.net](https://app.diagrams.net/).

## Why you need to know this?

Visual diagrams help us see what is not obvious. A picture is worth a thousand words. Software is complex, and the problems we deal with in distributed systems at scale are very hard to talk about. Drawing boxes and arrows allows us to put everybody on the same page and actually make sense of things.

It does not matter if you follow or do not follow [UML standards](https://diego-pacheco.blogspot.com/2020/10/uml-hidden-gems.html). The goal is to make the invisible into something visible. You can only do code review because you see code in front of you; how do you do architecture and design review if there is nothing in front of you? So diagrams are the way to go.
