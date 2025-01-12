import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getHello() {
    const { appSource, viteHost } = await this.appService.getApplication();

    return {
      message: JSON.stringify(appSource),
      app: appSource.src,
      viteHost,
    };
  }
}
