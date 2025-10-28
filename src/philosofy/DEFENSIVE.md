# Defensive Programming

[Defensive programming](https://en.wikipedia.org/wiki/Defensive_programming) is a design approach that emphasizes anticipating and handling potential errors or unexpected inputs in software development. For instance, you always:
* Validate inputs to ensure they meet expected formats and constraints.
* Handle [exceptions gracefully](https://diego-pacheco.blogspot.com/2024/09/proper-error-handling.html) to prevent crashes and provide meaningful error messages.
* Design functions and methods to be robust against invalid or unexpected inputs.
* Avoid [nulls](https://diego-pacheco.blogspot.com/2020/08/null-validations-and-exceptions.html) at all cost.

Your code should be resilient. It should not break that easily.

Consider the following pseudo-code with Scala 3x:

```scala
class ProducService(
    @Autowired productRepository: ProductRepository,
    @Autowired logger: Logger
){
    def saveProduct(val product: Product, ctx: Context): Either[String, Product] = {
        val messageId = ctx.getMessageId()
        if(product.price < 0){
            val errorMsg = "Product price cannot be negative"
            logger.warn(s"[MessageId: $messageId] $errorMsg. Product: ${product.id}")
            return Left(s"$errorMsg [MessageId: $messageId]")
        }
        if (isBannedProduct(product)){
            val errorMsg = "This product is banned"
            logger.warn(s"[MessageId: $messageId] $errorMsg. Product: ${product.id}")
            return Left(s"$errorMsg [MessageId: $messageId]")
        }
        if (!isLegalProduct(product)){
            val errorMsg = "This product is not legal in your country"
            logger.warn(s"[MessageId: $messageId] $errorMsg. Product: ${product.id}")
            return Left(s"$errorMsg [MessageId: $messageId]")
        }
        Right(productRepository.save(product))
    }
}
```

You see that there are validations. We do not blindly trust the input. We check if the price is negative. If it is, we throw an exception. This is defensive programming in action.
