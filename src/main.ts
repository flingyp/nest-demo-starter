import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置应用路由前缀
  app.setGlobalPrefix('starter');

  await app.listen(3000);
}
bootstrap();
