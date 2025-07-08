import { Controller, Get } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userid}')
  public getPosts(@Param('userid') userId: string) {
    return this.postsService.findAll(userId);
  }
}
