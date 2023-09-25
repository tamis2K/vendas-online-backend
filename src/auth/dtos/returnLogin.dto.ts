import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';

export interface RetunrLogin {
  user: ReturnUserDto;
  accessToken: string;
}
