import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  private model: ChatGoogleGenerativeAI;
  constructor() {
    this.model = new ChatGoogleGenerativeAI({
      model: 'gemini-2.0-flash',
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  async analyzeImage(imageBase64: string, prompt: string) {
    const messages = [
      {
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: imageBase64 } },
          { type: 'text', text: prompt },
        ],
      },
    ];
    const response = await this.model.invoke(messages);
    const rawContent = response.text;
    const jsonContent = JSON.parse(
      rawContent.replace(/```json\n|```/g, ''),
    ) as {
      tags: { label: string; confidence: number }[];
    };
    return jsonContent;
  }
}
