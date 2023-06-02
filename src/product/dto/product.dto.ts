import { ArrayMinSize, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { Prisma } from "@prisma/client";

export class ProductDto implements Prisma.ProductUpdateInput {
  @IsString()
  name: string;

  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];

  @IsNumber()
  categoryId: number;
}
