import { ReturnUserDto } from '../../user/dtos/returnUser.dto';

export interface RetunrLogin {
  user: ReturnUserDto;
  accessToken: string;
}
