## JWT

[Json Web Tokens (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) it's a standard created in 2010. It defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

JWT has the following structure:

```
xxxxx.yyyyy.zzzzz
```
Where:
- `xxxxx` is the **header**: It typically consists of two parts: the type of the token (JWT) and the signing algorithm being used, such as HMAC SHA256 or RSA.
- `yyyyy` is the **payload**: It contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
Payload Example:
    ```
    {
        "id": "1234567890",
        "name": "John Doe",
        "admin": true
    }
    ```

- `zzzzz` is the **signature**: To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

The flow would be something like:
1. User Logs in with credentials.
2. Server verifies the credentials and generates a JWT.
3. Server sends the JWT back to the user.
4. User stores the JWT (usually in local storage).
5. For subsequent requests, the user includes the JWT in the Authorization header using the Bearer schema.

## Why you need to know this?

The main benefit of JWT it that is self-contained. This means that all the information needed to verify the token is contained within the token itself. This makes JWTs very efficient for stateless authentication mechanisms, as the server does not need to store session information. Meaning you can save calls to a `authenticate` endpoint on every request because each service or each component that has the JWT can verify and validate locally without a remote call.

However, you should be rotating and expiring JWTs properly to mitigate security risks. Also, be cautious about what information you include in the payload, as JWTs can be decoded easily. Sensitive information should not be stored in the payload unless it is encrypted. You can debug JWTs easily using tools like [jwt.io](https://jwt.io/).