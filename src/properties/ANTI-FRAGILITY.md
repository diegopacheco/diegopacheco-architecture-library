# Anti-Fragility

[Anti-fragility](https://diego-pacheco.blogspot.com/2015/09/devops-is-about-anti-fragility-not-only.html) is a property of systems that not only withstand shocks and stressors but also improve and grow stronger as a result of them. Unlike resilience, which focuses on maintaining stability in the face of adversity, anti-fragile systems thrive on volatility and uncertainty.

In order to achive anti-fragility you need Defensive Programing and Chaos Engineering. You must test that your system is tolerant and can recover from failure. So you induce and provoke failure in your system and infrastrcuture to proove when necessary.

You do not want discover in production if the system can recover from failure, you want to know before hand. You want to know that your system is anti-fragile. Testing in production is not the same as discovering in production. Testing in production means, guard-rails and testing in production environment but without impacting real users.

Your systems must be anti-fragile. You architevture must be anti-fragile. Your infrastructure must be anti-fragile. To be anti-fragile you need lots of hypotethesis and experiments to proove your system is anti-fragile. Anti-fragility requires `science` and `creativity`.