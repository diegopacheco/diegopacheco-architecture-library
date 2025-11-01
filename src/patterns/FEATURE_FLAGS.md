# Feature Flags

[Feature flags](https://en.wikipedia.org/wiki/Feature_toggle) are runtime configuration switches that enable or disable functionality without deploying new code. They decouple deployment from release, allowing gradual rollouts and instant rollbacks, migrations and A/B testing.

## Strategies

**Environment Variables**: Simplest approach. Requires restart to change. Good for operational flags.

**Configuration Files**: Load from files on startup or reload periodically. No restart needed if hot-reloaded.

**Database or Cache**: Dynamic flags stored in database or distributed cache. Change instantly across all instances.

**Feature Flag Services**: Dedicated systems like LaunchDarkly, Split, or Unleash. Advanced targeting and analytics.

## Targeting and Segmentation

Flags can target based on:
* User ID or email for specific users
* Percentage rollout for gradual releases
* Geographic region or data center
* User attributes like subscription tier
* Environment like staging vs production
* Random sampling for experiments

## Anti-Patterns

**Long-Lived Release Flags**: Release flags should be temporary. Remove after release complete.

**Nested Flags**: Flags inside flags create exponential complexity. Avoid deeply nested conditions.

**Flag Proliferation**: Too many flags make system hard to reason about. Be selective.

**Using Flags for Configuration**: Feature flags are not general configuration. Use proper config systems for that.

## Why you need to know this?

Because if you want to do experiments and A-B testing you will need use feature flags. Feature flags should:
* Have a clear time to die. i.e this feaure flag will last 3 sprints or 2 weeks.
* Never be nested (make it flat, make it simple)
* Have a highly descriptive name. i.e `sales.report.top.sales.experrience.v2` make sure you name your feature flags all with the same pattern.
* Feature flags should not be confused with the CORE buisness(backend) or even with permanent configuration. i.e display.themme = dark | light is not a feature flag.
* Be documented in a central place so everyone knows what they are and what they do. A Catalog for feature flags it's a good idea.
* Feature falgs must be testd. You must have tests that cover the feature flag being ON and OFF.
