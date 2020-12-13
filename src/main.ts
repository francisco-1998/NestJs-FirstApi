import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, }))

  const logger = new Logger();
  await app.listen(3000);
  logger.log(`Server is running in port ${await app.getUrl()}`)
}
bootstrap();
