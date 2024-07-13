import { Controller, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { VerifyClientDto } from './dto/verify-client.dto';
import { RegisterClientDto } from './dto/register-client.dto';

@Controller()
export class AppController {
  constructor(private readonly clientsService: AppService) {}

  @MessagePattern({ cmd: 'verifyClient' })
  async verifyClient(@Body() verifyClientDto: VerifyClientDto) {
    return await this.clientsService.verifyClient(verifyClientDto.clientId);
  }

  @MessagePattern({ cmd: 'getAllClient' })
  async getClient() {
    return await this.clientsService.getClient();
  }

  @MessagePattern({ cmd: 'registerClient' })
  async registerClient(@Body() registerClientDto: RegisterClientDto) {
    return await this.clientsService.registerClient(registerClientDto);
  }
}
