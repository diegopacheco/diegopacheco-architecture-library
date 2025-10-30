# BASE 
A concept from NoSQL databases.
[BASE](https://aws.amazon.com/compare/the-difference-between-acid-and-base-database/) systems prioritize availability instead of immediate consistency.

## BASE Properties
BASE is an acronym that describes the consistency model used by many NoSQL systems. It stands for:

### BA == Basically Available
The system guarantees availability - it will always respond to requests, even if the response contains stale or inconsistent data. The database remains operational even when parts of the system fail.

### S == Soft state
The state of the system may change over time, even without new input, due to eventual consistency. Data doesn't have to be immediately consistent across all nodes.

### E == Eventual consistency
Given enough time without new updates, all replicas will eventually converge to the same value. The system doesn't guarantee immediate consistency but promises that consistency will be achieved eventually.

## Why you need to know this?

NoSQL databases like DynamoDB, Cassandra, Redis are often BASE. By understanding BASE properties you can better understand what to expect from your NoSQL database. For instance knowing you have a BASE set of properties in place means that if you insert some data, or update some data, you might not see that replicated across all nodes immediately. Eventually it will be all consistent across all nodes.

This might sound silly but affects the user experience to the sense that you will not have immediate effect of anything. In a Sync/Blocking universe everything is immediate, but you might think that is better? Well for humans might be but for systems it sucks and it is much harder to scale. In AWS everything is Async and Non-Blocking.

Do not believe me? Watch this keynote from AWS re:Invent 2022 where Dr. Werner Vogels (CTO of AWS) explains this concept in detail around the 1 hour mark.
<div style="position: relative; width: 100%; padding-bottom: 56.25%">
<iframe src="https://www.youtube.com/embed/RfvL_423a-I?start=1" 
        title="AWS re:Invent 2022 - Keynote with Dr. Werner Vogels" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        style="position: absolute; width: 100%; height: 100%;">
</iframe>
</div>
PS: I was there in Vegas and saw that live, was pretty awesome.