import { Message } from './message.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageRepository {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: MongoRepository<Message>,
  ) {}

  fetchMessage(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  fetchMessageById(id: string | ObjectId): Promise<Message> {
    let _id = typeof id === 'string' ? new ObjectId(id) : id;
    return this.messageRepository.findOneBy({ _id });
  }

  async postMessage(message: CreateMessageDto): Promise<Message> {
    const result = await this.messageRepository.insertOne(message);
    if (result.acknowledged) {
      return this.fetchMessageById(result.insertedId);
    }
  }
}
