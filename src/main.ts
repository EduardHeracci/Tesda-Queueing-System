import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
    methods: 'GET, OPTIONS',
  });

  app.use((req, res, next) => {
    res.setHeader(
      'Access-Control-Expose-Headers',
      'X-Access-Token, X-Refresh-Token, X-User',
    );
    next();
  });

  await app.listen(3000);
}

bootstrap();
