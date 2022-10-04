import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

// 自定义异常过滤器，负责捕获 HttpException 类实例的异常，并且设置自定义响应逻辑
// @Catch() 可以传递多个参数，所以你可以通过逗号分隔来为多个类型的异常设置过滤器
@Catch(HttpException)
export class GlobalExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const status = exception.getStatus();
    const message: any = exception.getResponse();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    response.status(status).json({
      status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
