import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'express-handlebars';
import { viteHMRTags } from './hbs/helpers';

const PORT = process.env.PORT ?? 3000;
const HOST = '0.0.0.0';

const hbsConfig = hbs.engine({
  extname: 'hbs',
  layoutsDir: join(__dirname, '..', 'views', 'layouts'),
  defaultLayout: false,
  helpers: {
    viteHMRTags,
  },
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine('hbs', hbsConfig);

  await app.listen(PORT, HOST);
}

bootstrap();
