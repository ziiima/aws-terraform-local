import { Module } from '@nestjs/common';
import { WebUiController } from './controllers/web-ui.controller';

@Module({
  controllers: [WebUiController],
})
export class ViteModule {}
