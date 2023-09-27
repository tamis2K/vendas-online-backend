import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  id: 31233,
  userId: userEntityMock.id,
  complement: 'sadwefefsad',
  numberAddress: 4123,
  cep: '31234123',
  cityId: cityMock.id,
  updatedAt: new Date(),
  createdAt: new Date(),
};
