import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async register(registerDto: RegisterDto): Promise<void> {
    const { role, firstName, lastName, email, phoneNumber, password } =
      registerDto;

    const userExists = await this.usersRepository.findOneBy({ email });
    if (userExists) throw new ConflictException('User already exists');

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user: User = {
      id: uuid(),
      active: true,
      role,
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      password: hashedPassword,
      created: new Date(),
      updated: new Date(),
      deleted: null,
    };

    await this.usersRepository.save(user);
  }

  async login(loginDto: LoginDto): Promise<void> {
    const { email, password } = loginDto;

    await this.usersRepository.findOneBy({ email });
  }
}
