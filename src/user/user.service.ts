import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  sayHelloWorld(): string {
    return `Hello World`;
  }
}
