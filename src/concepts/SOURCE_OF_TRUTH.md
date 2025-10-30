# Source of Truth

It is a concept that means what database or system is considered the authoritative source for a particular piece of information. It is common in distributed systems to have multiple databases or even systems that store the same data. In such cases, it is crucial to designate one of these as the ["source of truth"](https://en.wikipedia.org/wiki/Single_source_of_truth) to ensure consistency and reliability of the data across the entire system.

The same concept is used in migrations. While you are migrating from System A to System B, System A is the source of truth until the migration is complete and verified. After that, System B becomes the new source of truth.

## Why you need to know this?

In distributed systems, having a clear source of truth is essential to avoid data inconsistencies and conflicts. When multiple services or databases can modify the same data, it can lead to situations where different parts of the system have different versions of the truth. This can cause errors, confusion, and data integrity issues.

It's common to have one system or one database behind a service to be the Source of Truth. This also means that a bunch of systems can READ or have a COPY of the data, usually in a form of a CACHE to have performance benefits, but when regards of where to WRITE must be a clear and only one place.

This might sound silly, but this can either bring great sanity or a big mess to your system. Always make sure you have a clear Source of Truth for your data.