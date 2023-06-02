import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from "../prisma.service";
import { UserService } from "../user/user.service";

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, UserService],
})
export class OrderModule {}
