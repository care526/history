import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Interceptor } from './interceptors';
import { registerSwaggerDocument } from './registerSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  registerSwaggerDocument(app); // 设置swagger文档

  app.enableCors(); // 允许跨域
  app.useGlobalInterceptors(new Interceptor()); // 全局拦截器

  await app.listen(4000);
}

bootstrap();
