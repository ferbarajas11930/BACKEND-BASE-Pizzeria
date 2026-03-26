"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./config");
async function bootstrap() {
    const logger = new common_1.Logger('SSMS-BACKEND');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SSMS BACKEND API')
        .setDescription('SSMS Backend API Documentation')
        .setVersion('3.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(config_1.envs.port);
    logger.log(`Backend SSMS is running on port ${config_1.envs.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map