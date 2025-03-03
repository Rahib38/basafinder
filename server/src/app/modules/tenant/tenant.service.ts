import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { IRentalRequest } from './tenant.interface';
import { RentalRequest } from './tenant.model';

const createRentalRequest = async (payload: IRentalRequest) => {
  const result = await RentalRequest.create(payload);
  return result;
};

const getAllRentalRequest = async (query: Record<string, unknown>) => {
  const result = await RentalRequest.find(query);
  return result;
};

const updateTanantProfile = async (_id: string, payload: TUser) => {
  const result = await User.findByIdAndUpdate(_id, payload, {
    new: true,
  });
  return result;
};

export const tenantService = {
  createRentalRequest,
  getAllRentalRequest,
  updateTanantProfile,
};
