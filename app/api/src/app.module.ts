import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViteModule } from './vite/vite.module';

@Module({
  imports: [ViteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
