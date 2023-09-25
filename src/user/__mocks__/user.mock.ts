import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123142364',
  createdAt: new Date(),
  email: 'emailnock@email.com',
  id: 43242,
  name: 'nameMock',
  password: 'largePassword',
  phone: '315263517',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
