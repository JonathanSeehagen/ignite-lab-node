import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { notificationController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [notificationController],
})
export class MessagingModule {}
