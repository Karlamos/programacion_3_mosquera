import { Injectable } from '@nestjs/common';
import { ProductoDto } from './product.dto';

@Injectable()
export class AppService {
  private products: ProductoDto[] = [
    {
      id: 1,
      name: "Laptop",
      price: 850,
      stock: 10
    },

    {
      id: 2,
      name: "Mouse",
      price: 25,
      stock: 50
    },
  ];

  getHeath(): any {
    return {
      "status": "Online",
      "service": "blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }

  createProduct(product: ProductoDto): ProductoDto {
    const newProduct: ProductoDto = {
      id: Math.floor(Math.random() * 1000)+1,
      ...product
    }
    this.products.push(newProduct);
    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }

  findAll(): ProductoDto[] {
    return this.products;
  }

  findById(id: string): ProductoDto {
    return this.products!
      .find(product=> product.id === Number(id))!;
  }
}