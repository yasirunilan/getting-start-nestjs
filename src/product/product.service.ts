import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private dbService: DatabaseService) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.dbService.product.create({ data: createProductDto });
    return product;
  }

  async findAll(): Promise<Product[] | null> {
    const products = this.dbService.product.findMany();
    return products;
  }

  async findOne(id: number): Promise<Product | null> {
    const product = this.dbService.product.findUnique({ where: { id } });
    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    const product = this.dbService.product.update({
      where: { id },
      data: updateProductDto,
    });
    return product;
  }

  async remove(id: number): Promise<Product | null> {
    const product = this.dbService.product.delete({
      where: { id },
    });
    return product;
  }
}
