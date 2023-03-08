import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Pets')
    .setDescription('The Pets API description')
    .setVersion('1.0')
    .addTag('pets')
    .build();