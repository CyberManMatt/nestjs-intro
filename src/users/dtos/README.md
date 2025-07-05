# DTOs

Short for Data Transfer Objects, DTOs are validators that validate data from the
request before it goes to the controller for processing.

GET, POST, and PATCH/PUT routes can have different DTOs associated with them.

DTOs uses the `class-validator` package to validate data, and uses decorators on
each property to define the schema.

DTOs can be inherited from using the `@nestjs/mapped-types` package. You can
see an example of such in the `patch-user.dto.ts` file.

DTOs are an essential part of validation and data sanitization for web APIs.