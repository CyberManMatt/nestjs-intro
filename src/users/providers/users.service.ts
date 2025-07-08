import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  /*
  Find all users in the database
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john.doe@example.com',
      },
      {
        firstName: 'Alice',
        email: 'alice.doe@example.com',
      },
    ];
  }

  /*
  Finds a user by ID
   */
  public findOneById(id: number) {
    return {
      id: 5432,
      firstName: 'Alice',
      email: 'alice.doe@example.com',
    };
  }
}
