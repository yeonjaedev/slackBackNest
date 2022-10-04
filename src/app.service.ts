import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import process from 'process';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  async sayHello() {
    return this.configService.get('DB_PASSWORD'); // process.env.DB_PASSWORD
  }

}
