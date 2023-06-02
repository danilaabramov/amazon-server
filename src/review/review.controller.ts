import {
  Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, HttpCode
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { Auth } from "../auth/decorators/auth.decorator";
import { CurrentUser } from "../auth/decorators/user.decorator";
import { ReviewDto } from "./review.dto";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll() {
    return this.reviewService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("leave/:productId")
  @Auth()
  async leaveReview(@CurrentUser("id") id: number,
                    @Body() dto: ReviewDto,
                    @Param("productId") productId: string) {
    return this.reviewService.create(id, dto, +productId);
  }
}
