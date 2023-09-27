import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123142364',
  createdAt: new Date(),
  email: 'emailnock@email.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$GuK3yTlY5Z161Lm/.YND1u6teGQ4C0.nR9qMcZfQ4oBYPM/0.v4rq',
  phone: '315263517',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
