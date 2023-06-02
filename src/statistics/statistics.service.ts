import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import { UserService } from "../user/user.service";

@Injectable()
export class StatisticsService {
  constructor(private prisma: PrismaService, private userService: UserService) {}

  async getMain(userId: number) {
    const user = await this.userService.byId(userId, {
      orders: {
        select: {
          items: {
            select: {
              price: true
            }
          }
        }
      },
      reviews: true
    })

    // for (let order of user.orders) {
    //   let total = 0
    //   for (let vote of order.) {
    //     vote_sum += vote.value
    //   }
    //   ;(question as any).vote_sum = vote_sum
    // }

    return user.orders

    return [
      {
        name: 'Orders',
        value: user.orders.length
      },
      {
        name: 'Reviews',
        value: user.orders.length
      },
      {
        name: 'Favorites',
        value: user.orders.length
      },
      {
        name: 'Total amount',
        value: 1000
      }
    ]
  }
}
