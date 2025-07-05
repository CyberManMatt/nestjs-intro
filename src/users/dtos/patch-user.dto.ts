import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// To avoid duplicate code, use the PartialType class from @nestjs/mapped-types
// to inherit another DTO.

/*
   Data Transfer Object that inherits the CreateUserDto class. Used in
   PATCH /user/id endpoints
*/
export class PatchUserDto extends PartialType(CreateUserDto) {}
