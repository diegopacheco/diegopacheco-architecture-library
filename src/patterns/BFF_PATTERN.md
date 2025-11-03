# Backend for Frontend Pattern

The [Backend for Frontend (BFF)](https://diego-pacheco.blogspot.com/2020/08/bff-dilema.html) pattern involves creating separate backend services tailored to the specific needs of different frontend applications. Usually written in a language that is common for the frontend team, meaning: NodeJS with JS or TypeScript.

BFFs should have `Rendering Logic` and should NEVER have `Business Logic` because that should be encapsulated in the core backend services.

## BFFs Are

- **Frontend-Specific**: Each BFF is designed and optimized for a specific frontend application.
- **Team Ownership**: The team that builds the frontend typically owns and maintains its BFF.
- **Aggregation Layer**: BFFs aggregate data from multiple downstream services.
- **Tailored Responses**: Returns only the data the frontend needs in the format it expects.

## BFF vs API Gateway

While both BFF and API Gateway sit between frontends and backend services, they serve different purposes:

**API Gateway**: Provides common functionality like authentication, rate limiting, and routing. It serves all clients with the same generic interface.

**BFF**: Tailors the API specifically to each frontend's needs. It aggregates, transforms, and optimizes responses for a specific client type. Rendering logic is part of the BFF.

## Why you need to know this?

Nowadays pretty much the frontend is written in Typescript and NodeJS or other modern runtimes like Deno or Bun. BFF allow us to have common render logic for Mobile and Frontend. It's very common pattern to have a BFF between the web/mobile and the backend services.

You will see this pattern happening a lot. You should be leveraging this pattern as well. However you always need to be careful what you put on BFFs. Remember: No Business Logic on BFFs, only Rendering Logic.