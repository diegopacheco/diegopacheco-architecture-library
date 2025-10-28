# Secure

Software must be secure. Architects should prioritize security in their designs to protect data and maintain user trust. Lack of security ruins brands, trust is damaged, and legal consequences may arise.

Security means implementing measures to protect systems from threats such as unauthorized access, data breaches, and cyber-attacks. This includes practices like [encryption](https://diego-pacheco.blogspot.com/2020/11/why-encryption-is-so-hard.html), authentication, authorization, [tokenization](https://diego-pacheco.blogspot.com/2023/08/tokenization-encryption-and.html), [passwords](https://blog.algomaster.io/p/securely-storing-passwords-in-a-database) where the best way to deal with them is to [not have credentials](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html), and regular security audits.

Common considerations for secure architecture:
- **Data Protection**: Ensure sensitive data is encrypted both in transit and at rest.
- **Access Control**: Implement robust authentication and authorization mechanisms to restrict access to authorized users only
- **Regular Updates**: Keep software and dependencies up to date to mitigate vulnerabilities.

Architects need to know security. Architecture must be designed with security in mind from the outset, rather than being an afterthought. This includes threat modeling, secure coding practices, and continuous monitoring for potential vulnerabilities.

By prioritizing security in software architecture, organizations can safeguard their systems, protect user data, and maintain trust with their users.

## Nothing to Leak

If you have sensitive information, therefore it can be leaked. Unless you do not have it. For instance, there is a variety of tools and solutions that make you "not have secrets." If you do not have secrets:
* You can't leak them
* You don't need rotate them
* You don't need to worry

Examples of "Nothing to Leak" solutions:
* [AWS RDS IAM Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html)
* [AWS KMS](https://aws.amazon.com/kms/)
* Not valid to all applications - but - not storing OPEN_API_KEY

## When you have Credentials

You need a lot of work to make sure they are secure. For each credential or key you have, you need:
* Rotate them periodically
* Store them securely (eg: secrets manager, AWS KMS, HashiCorp Vault, etc)
* Audit their usage
* Monitor for leaks (eg: [Have I Been Pwned](https://haveibeenpwned.com/))
* Limit their access (eg: least privilege principle) - for keys (called key scoping)

## GitOPS is Sexy for Security

[GitOps](https://about.gitlab.com/topics/gitops/) is a practice that uses Git repositories as the single source of truth for declarative infrastructure and applications. By leveraging GitOps, organizations can enhance security.

The core idea with GitOps is that you do not give `admin` or super `privileges IAM roles` to developers. Instead, you have a system that applies changes based on approvals. For GitOps, such approvals come from Pull Requests that are merged. You have a history of all changes and can walk back in time thanks to Git.

GitOps is perfect for security because you reduce the blast radius of "sharing credentials".