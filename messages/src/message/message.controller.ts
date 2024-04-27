import {
  Body,
  CallHandler,
  Controller,
  ExecutionContext,
  Get,
  Injectable,
  Logger,
  NestInterceptor,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Injectable()
class LogHandlerName implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    Logger.log(context.getHandler().name);
    return next.handle();
  }
}

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('/')
  @UseInterceptors(LogHandlerName)
  getAllMessages() {
    return this.messageService.findMessage();
  }

  @Get('/:id')
  @UseInterceptors(LogHandlerName)
  getMessage(@Param('id') id: string) {
    return this.messageService.findMessageById(id);
  }

  @Post('/')
  @UseInterceptors(LogHandlerName)
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.createMessage(body);
  }
}
