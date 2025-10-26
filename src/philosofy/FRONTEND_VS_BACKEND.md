# Frontend VS Backend
Frontend by nature it's spesific. One react component, one page, one feature. Backend by nature it's generic. One api endpoint, serves manny features, many pages.

## Frontend Thinking
Tends to think 1:1. One component, one feature, one page. Which might be fine for frontend but not for backend. It's common to frontend engineers think that every single `fetch` they need todo should be a separate api endpoint(which leads to [lack of conceptual integrity](https://wiki.c2.com/?ConceptualIntegrity)).

## Backend Thinking
Tends to think 1:many. One api endpoint, serves many features, many pages. Which might be fine for backend but not for frontend. By default backend services should be generic and reusable.

It's okay yo have many pages or many components but is not okay to have that many services. They should be generic, more centralizers, reusable by design.