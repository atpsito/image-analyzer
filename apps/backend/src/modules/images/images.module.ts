import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { GeminiService } from 'src/common/services/gemini.service';

@Module({
  providers: [ImagesService, GeminiService],
  controllers: [ImagesController],
})
export class ImagesModule {}
