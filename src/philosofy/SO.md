# Service Orientation

[Service Oriented Architecture (SOA)](https://diego-pacheco.blogspot.com/2014/11/soa-micro-services-and-isolation.html) is a big deal. [SOA](https://diego-pacheco.blogspot.com/2020/07/double-down-on-service-orientation.html) should be the default way of thinking and operating services in modern software architecture. Service Orientation should be the default choice for solutions. Services are more important and better than internal libraries.

Services allow Isolation, Independence and Flexibility. When services are done right, with proper contracts, refactor can happen under the hood. Services allow different stacks and technology.

[Services](https://diego-pacheco.blogspot.com/2024/12/services.html) should be Capability oriented. Services should be as generic as possible and it's okay to have more granularity and more code in a service. Services do not need to be micro(Micro Services).

The most important part of services is the contract. The contract is the API. The API should be as stable as possible. The API should be backward compatible as much as possible. The API should be well documented and versioned.

[Contracts](https://diego-pacheco.blogspot.com/2021/04/its-all-about-contracts.html) must be well designed and reviewed carefully, it's not difficult to make [poor contracts](https://diego-pacheco.blogspot.com/2024/12/leaky-contracts.html) because engineers and even more frontend engineers are just thinking on what needs to change, and are no thinking if is the right place to make the change or if sohuld be that way at all.