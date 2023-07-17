import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseService } from 'src/database.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, DatabaseService],
})
export class ProductModule {}
