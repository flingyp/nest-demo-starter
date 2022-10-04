import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './filter/global-exception.filter';
import { ValidationPipe } from './pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置应用路由前缀
  app.setGlobalPrefix('starter');
  // 设置全局异常捕获过滤器
  app.useGlobalFilters(new GlobalExceptionFilter());
  // 设置全局验证管道 （全局作用域的管道，用于整个应用程序中的每个路由处理器）
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
