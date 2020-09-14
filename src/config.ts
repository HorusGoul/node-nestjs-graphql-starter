import { NestExpressApplication } from '@nestjs/platform-express';

export function configureApp<T extends NestExpressApplication>(app: T): T {
  return app;
}
