import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }

  @Post("/products")
  createProduct(@Body() product: ProductoDto): ProductoDto {
    return this.appService.createProduct(product);
  }

  @Get("/products")
  findAll(): ProductoDto[] {
    return this.appService.findAll();
  }

  @Get("/products/:id")
  findById(@Param('id') id: string): ProductoDto {
    return this.appService.findById(id);
  }
}