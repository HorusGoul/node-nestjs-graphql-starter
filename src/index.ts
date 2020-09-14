import './aliases';
import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { configureApp } from './config';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  let app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  app = configureApp(app);

  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>('PORT', '3000'), 10);

  await app.listen(port, '0.0.0.0');
}

bootstrap();
