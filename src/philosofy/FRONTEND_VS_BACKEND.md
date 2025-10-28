# Frontend VS Backend
Frontend by nature is specific. One React component, one page, one feature. Backend by nature is generic. One API endpoint serves many features, many pages.

## Frontend Thinking
Tends to think 1:1. One component, one feature, one page. This might be fine for frontend but not for backend. It is common for frontend engineers to think that every single `fetch` they need to do should be a separate API endpoint (which leads to [lack of conceptual integrity](https://wiki.c2.com/?ConceptualIntegrity)).

## Backend Thinking
Tends to think 1:many. One API endpoint serves many features, many pages. This might be fine for backend but not for frontend. By default, backend services should be generic and reusable.

It is okay to have many pages or many components, but it is not okay to have that many services. They should be generic, more centralized, and reusable by design.