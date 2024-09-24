import {
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UsersRole } from 'src/users/users-role.enum';

export class RegisterDto {
  @IsNotEmpty()
  @IsEnum(UsersRole)
  role: UsersRole;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
