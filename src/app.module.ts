import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './entities/client.entity';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '73198416',
      database: 'clients_db',
      entities: [Client, Contact],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Client, Contact]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
