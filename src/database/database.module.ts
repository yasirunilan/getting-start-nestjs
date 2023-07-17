import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [DatabaseService],
  providers: [DatabaseService],
})
export class DatabaseModule {}
