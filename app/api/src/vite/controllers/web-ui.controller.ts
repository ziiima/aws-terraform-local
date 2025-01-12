import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { proxy } from '../libs/proxy';

@Controller('src')
export class WebUiController {
  @Get('assets/**')
  async proxyAssets(@Req() req, @Res() res, @Next() next) {
    try {
      return await proxy(req, res, next);
    } catch (e: unknown) {
      console.log(e);
    }
  }
}
