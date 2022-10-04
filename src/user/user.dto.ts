/**
 * 创建用户的DTO
 */

import { IsPhoneNumber, IsString } from 'class-validator';

// 关于类型定义的解释：https://docs.nestjs.cn/9/controllers?id=%e8%af%b7%e6%b1%82%e8%b4%9f%e8%bd%bd
export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly password: string;
}
