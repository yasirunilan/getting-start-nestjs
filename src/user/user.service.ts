import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DatabaseService) {}
  create(createUserDto: CreateUserDto): Promise<User | null> {
    const user = this.dbService.user.create({ data: createUserDto });
    return user;
  }

  findAll() {
    const users = this.dbService.user.findMany();
    return users;
  }

  findOne(id: number) {
    const user = this.dbService.user.findUnique({ where: { id } });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.dbService.user.update({
      where: { id },
      data: updateUserDto,
    });
    return user;
  }

  remove(id: number) {
    const user = this.dbService.user.delete({ where: { id } });
    return user;
  }
}
