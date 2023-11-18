import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // The constructor is where we inject dependencies.
  // In this case, we inject the AppService as a constructor parameter dependency.(Injected by provider)
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
}
