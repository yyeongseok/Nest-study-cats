import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // <- 엔드포인트 기입 가능 localhost:8000/cats
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // <- 추가적인 엔드포인트 기입가능 localhost:8000/cats/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
