import { Injectable } from '@nestjs/common';
import { image2base64 } from 'src/common/utils/image2base64.util';
import { SYSTEM_PROMPT } from 'src/config/constants';
import { GeminiService } from 'src/common/services/gemini.service';

@Injectable()
export class ImagesService {
  private readonly geminiService: GeminiService;
  constructor(private readonly geminiServiceParam: GeminiService) {
    this.geminiService = geminiServiceParam;
  }
  async analyzeImage(image: Express.Multer.File) {
    const imageBase64 = image2base64(image);
    const response = await this.geminiService.analyzeImage(
      imageBase64,
      SYSTEM_PROMPT,
    );
    return response;
  }
}
