import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

/*
 * Data Transfer Object that is used in the POST /users endpoint.
 */
export class CreateUserDto {
  @IsString() // Verify that the input is a string
  @IsNotEmpty() // Verify that the field is required
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail() // Verify that the input is an email
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(12) // Verify that the minimum length is 12 characters
  // Verify at least one letter, one number, and one special character
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      // This is how you can add a custom error message to the user.
      'Minimum 12 characters, at least one letter, one number and one special character',
  })
  password: string;
}
