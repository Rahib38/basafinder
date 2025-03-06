import { StatusCodes } from 'http-status-codes';
import AppError from '../../Errors/appError';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { Listing } from '../landlord/landlord.model';
import { IListing } from '../landlord/landlord.interface';

const getAllUser = async (query: Record<string, unknown>) => {
  const result = await User.find(query);
  return result;
};
const UpdateUser = async (_id: string, role: TUser) => {
  const result = await User.findByIdAndUpdate(_id, role, { new: true });
  return result;
};

const blockUser = async (_id: string) => {
  const checkUser = await User.findById(_id);
  if (!checkUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User not found!!');
  } else if (checkUser.isBlocked) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is blocked!!');
  }

  const result = await User.findByIdAndUpdate(
    _id,
    { isBlocked: true },
    { new: true },
  );
  if (!result) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'user not blocked! try again later......👻',
    );
  }
};


const getAllLandloardsListing = async (query: Record<string, unknown>) => {
  const result = await Listing.find(query);
  return result;
};

const updateLandloardsListing = async (_id: string, payload: IListing) => {
  const result = await Listing.findByIdAndUpdate(_id, payload, { new: true });
  return result;
};

const deleteLandloardsListing = async (_id: string) => {
    const result = await Listing.findByIdAndDelete(_id);
    return result;
  };

  
export const adminService = {
  getAllUser,
  UpdateUser,
  blockUser,getAllLandloardsListing,deleteLandloardsListing,updateLandloardsListing
};
