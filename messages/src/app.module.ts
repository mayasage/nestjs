import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://mayablacksage:a2ciA2aTfrqK576D@megara.igdtnoj.mongodb.net/message?retryWrites=true&w=majority&appName=Megara',
      entities: [Message],
    }),
    MessageModule,
    RouterModule.register([
      {
        path: 'api',
        module: MessageModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
