# Authentication & Authorization & Entitlements

## Authentication

[Authentication](https://en.wikipedia.org/wiki/Authentication) is the process of verifying the identity of a user or system. It ensures that the entity requesting access is who they claim to be. Common methods of authentication include:
- Passwords (very bad)
- Multi-factor authentication (MFA)
- Biometric verification
- OAuth tokens
- API keys
- Single Sign-On (SSO)

## Authorization

[Authorization](https://en.wikipedia.org/wiki/Authorization) is the process of determining what an authenticated user or system is allowed to do. It defines the permissions and access levels for different resources. Common authorization models include:
- Access Control Lists (ACLs)
- Role-Based Access Control (RBAC)
- IAM (Identity and Access Management) systems
- Policy-Based Access Control (PBAC)
- Policy as Code

## Entitlements

Entitlements refer to the specific rights or privileges granted to a user or system after authentication and authorization. They define what actions can be performed on specific resources. Examples of entitlements include:
- Access a product catalog (invisible by default)
- See premium content
- See premium features

## Why you need to know this?

Authentication

1. Not all our services need to be public or customer facing.
2. Whatever you have that is customer facing, must have authentication.
3. Internal services don't require any authentication.

Authorization

1. It's the next step after authorization. 
2. In security we can give granular access to resources. This principle is called [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
3. Authonrization is checking if the user has the fine grained access to a resource.

Entitlements

1. It's common in digital products to have tiers of products. Such tiers can be called: basic, premium, silver, gold, platinum, free, pro, enterprise. But all this ters are also called entitlements.
2. Entitlements means, given the user subscription or plan, can he see some feature or not. 
3. Consider entitlements the gap how tell, what features a user can see or not. Do not confuse entitlements with feature flags or experiments.