import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAll(): string {
    return '查询所有用户学生';
  }

  @Get('find/:id')
  findOneUser(
    @Param('id') id: string | number,
    @Query('role') role: string,
  ): string {
    return `查询某一位学生,他的ID是${id},他的角色是${role}`;
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto): string {
    return `创建一个新用户, 用户名是：${createUserDto.name}，密码是：${createUserDto.password}`;
  }
}
