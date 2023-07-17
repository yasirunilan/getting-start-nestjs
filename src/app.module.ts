import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { DatabaseService } from './database.service';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
