import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const logFormatMessage = (req: Request) => {
  return `Method: ${req.method} \n Request original url: ${req.url} \n IP: ${req.ip} \n Status code: ${req.statusCode} \n`;
};

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(logFormatMessage(req));
    next();
  }
}
