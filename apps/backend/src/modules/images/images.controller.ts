import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  private readonly imagesService: ImagesService;
  constructor(private readonly imagesServiceParam: ImagesService) {
    this.imagesService = imagesServiceParam;
  }
  @Post('analyze')
  @UseInterceptors(FileInterceptor('image'))
  analyzeImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: 'image/*' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // 5MB
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.imagesService.analyzeImage(file);
  }
}
