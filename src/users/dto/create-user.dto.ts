import { IsEnum, IsNotEmpty } from 'class-validator';
import { UsersRole } from '../users-role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEnum(UsersRole)
  role: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  password: string;
}
