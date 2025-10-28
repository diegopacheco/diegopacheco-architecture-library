# Crystal Ball

Architects must have a good crystal ball. Requirements change, and a requirement change can break the architecture completely if it was not designed to accommodate change. Thinking ahead is a great practice because it allows you to predict the next moves, meaning you think big and ahead but execute small.

Code can and should be refactored. Refactoring should happen all the time and continuously. However, there are people who are allergic to refactoring, and that is a recipe for great disasters. Thinking ahead allows you to be prepared when you need it. Think about fire drills - you practice how to handle fire, so when you need it you are ready. 

Think big execute small.

### How to Train your Crystal Ball skills?

One simple way is paying attention to the industry and trends. You can learn from the errors of others. Sometimes it is not that the technology or concept is bad, but people apply it wrong, and if they apply it wrong depending on the case, it can be a huge disaster like [Microservices when done wrong](https://diego-pacheco.blogspot.com/2020/05/the-death-of-microservices-distributed.html).

Another form of crystal balling is to predict the next step. This one might sound harder but it is not. Let me give you 3 examples:

1. **Your application has a product catalog**: You can start with simple exact match on the database. But if you grow and have hundreds of products, you will need Full Text Search, something like OpenSearch or ElasticSearch. You can start thinking about how to integrate that in the future. You do not need it now, but you can get familiar with it, you can search the solution space, you can even get ready. When you need it, you are much better equipped to deal with it.
2. **You have updates for the user**: Which happen based on backend events. It is okay to use an old school polling mechanism, but if you think ahead you can start thinking about WebSockets or Server Sent Events. You can start learning how to implement that, so when you need it you are ready.
3. **You need to store files**: You can start with a relational database and store in a table (it is an anti-pattern), but if you think ahead you can start learning how to use S3 or MinIO. You can start learning how to integrate that, so when you need it you are ready.