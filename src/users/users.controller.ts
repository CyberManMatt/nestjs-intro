import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('{/:id}') // As of Nest v11, optional parameters must be enclosed in curly brackets
  /*
   * Finds a user in the database. Will return all users if no `id` parameter
   * was entered.
   *
   * - Endpoint for all users: GET /users
   * - Endpoint for user by `id`: GET /users/{id}
   *
   * ### Query Parameters
   * - `limit`: Default: 10
   * - `page`: Default: 1
   */
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto, // Use the param DTO here
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  /*
   * Adds a user to the database. Verify data inputs by using the CreateUserDto.
   *
   * Endpoint: POST /users
   *
   * ### Body
   * - `firstName: string`*
   * - `lastName: string`
   * - `email: string`*
   * - `password: string`*
   */
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You sent a POST request to the users endpoint';
  }

  @Patch()
  /*
   * Updates a user that is on the database. Validates data inputs by using the
   * PatchUserDto.
   *
   * Endpoint: PATCH /user/{id}
   *
   * ### Body
   * - `firstName: string`
   * - `lastName: string`
   * - `email: string`
   * - `password: string`
   */
  public updateUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
