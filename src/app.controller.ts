import { Controller, Get, Request } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDb(@Request() req) {
    this.appService.addToDb(req.ip, req.get('User-Agent'));
    return this.appService.getHello();
  }
}
