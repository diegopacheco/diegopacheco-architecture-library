# Crystal Ball

Architects must have a good crystal ball. Requirements change, a requirement change can break completely the architecture if it was not designed to accommodate change. So thinking ahead is a great practice because it allows you to predict the next moves, meaning you think big and ahead but execute small.

Code can and should be refactored. Refactoring should happen all the time and continuously. However there are people who are allergic to refactoring and that is a recipe for great disasters. Thinking ahead allows you to be prepared when you need it. Think about fire drills, you practice how to handle fire, so when you need it you are ready. 

Think big execute small.

### How to Train your Crystall Ball skills?

One simple way is paying attention on the industry and trends. You can learn from errors of others. Sometimes is not that technology or concept is bad but people apply it wrong and if they apply if wrong dependeding of the case can be a huge distaster like [Microservices when done wrong](https://diego-pacheco.blogspot.com/2020/05/the-death-of-microservices-distributed.html).

Another form of crystall balling is to predict the next step, this one might sound harder but is not. Let me give you 3 examples:

1. **You application has a product catalog**: For sure you can start with simple exact math on the database. But if you grow and have hundreds of products you will need Full Text Search, so something like OpenSearch or ElasticSearch. So you can start thinking on how to integrate that in the future. You dont need it now, but you can get familir with, you can search the solution space, you can even get ready. When you need you are much better equiped to deal with.
2. **You have updates for the user**: Which happen based on backend events, it's okay to use a old school polling mechanism, but if you think ahead you can start thinking on WebSockets or Server Sent Events. You can start learning how to implement that, so when you need it you are ready.
3. **You need to store files**: You can start with relational database and store in a table(it's a anti-pattern), but if you think ahead you can start learning how to use S3 or MinIO. You can start learning how to integrate that, so when you need it you are ready.