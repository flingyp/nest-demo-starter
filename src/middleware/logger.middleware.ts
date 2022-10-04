import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const logFormatMessage = (req: Request) => {
  const logMessage = `Method: ${req.method} \n Request original url: ${
    req.url
  } \n IP: ${req.ip} \n Query params: ${JSON.stringify(
    req.query,
  )} \n Body params: ${JSON.stringify(req.body)} \n`;
  console.log(logMessage);
};

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    logFormatMessage(req);
    next();
  }
}
