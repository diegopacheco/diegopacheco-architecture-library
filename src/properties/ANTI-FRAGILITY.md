# Anti-Fragility

[Anti-fragility](https://diego-pacheco.blogspot.com/2015/09/devops-is-about-anti-fragility-not-only.html) is a property of systems that not only withstand shocks and stressors but also improve and grow stronger as a result of them. Unlike resilience, which focuses on maintaining stability in the face of adversity, anti-fragile systems thrive on volatility and uncertainty.

In order to achieve anti-fragility you need Defensive Programming and Chaos Engineering. You must test that your system is tolerant and can recover from failure. So you induce and provoke failure in your system and infrastructure to prove when necessary.

You do not want to discover in production if the system can recover from failure, you want to know beforehand. You want to know that your system is anti-fragile. Testing in production is not the same as discovering in production. Testing in production means, guard-rails and testing in production environment but without impacting real users.

Your systems must be anti-fragile. Your architecture must be anti-fragile. Your infrastructure must be anti-fragile. To be anti-fragile you need lots of hypotheses and experiments to prove your system is anti-fragile. Anti-fragility requires science and creativity.

## How to develop Anti-Fragile Systems?

Basically we need to do 2 things. First we must test our infrastructure and systems to proof they are anti-fragile. AWS is anti-fragile by nature, but you could be using it wrong, so always a good idea to test it.

Second, you want to design with anti-fragility in mind. For instance we should not put all applications into a single database, we should have one database per service. Therefore we have isolation and protect against blast radius. So you see it is not just testing (which is chaos engineering) but also design with anti-fragility in mind.