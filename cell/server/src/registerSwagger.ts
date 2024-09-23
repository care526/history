import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function registerSwaggerDocument(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('cell')
    .setDescription('cell API description')
    .setVersion('0.0.1')
    .build();

  SwaggerModule.setup(
    'swagger',
    app,
    SwaggerModule.createDocument(app, options),
  );
}
