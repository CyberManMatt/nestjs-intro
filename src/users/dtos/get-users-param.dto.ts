import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

/* DTO for URL parameter in the /users/id endpoint.*/
export class GetUsersParamDto {
  @IsOptional() // Is an optional field
  @IsInt() // Must be a number (but will be a string, since it is an input)
  @Type(() => Number) // This converts it to a number
  id?: number;
}
