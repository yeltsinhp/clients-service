import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { RegisterClientDto } from './dto/register-client.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async verifyClient(clientId: number) {
    return (
      (await this.clientRepository.findOne({ where: { id: clientId } })) || null
    );
  }

  async getClient() {
    return await this.clientRepository.find();
  }

  async registerClient(registerClientDto: RegisterClientDto) {
    const client = this.clientRepository.create(registerClientDto);
    return await this.clientRepository.save(client);
  }
}
