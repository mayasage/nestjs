import { Injectable } from '@nestjs/common';
import { Message } from './message.entity';
import { MessageRepository } from './message.repository';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepository: MessageRepository) {}

  findMessage() {
    return this.messageRepository.fetchMessage();
  }

  findMessageById(id: string): Promise<Message> {
    return this.messageRepository.fetchMessageById(id);
  }

  createMessage(message: CreateMessageDto): Promise<Message> {
    return this.messageRepository.postMessage(message);
  }
}
