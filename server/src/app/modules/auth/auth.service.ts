import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../Errors/appError';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const register = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const login = async (payload: TUser) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new Error('This user is not found');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Wrong Password');
  }

  const jwtPayload = {
    email: user?.email,
    role: user?.role,
    _id: user?._id,
  };

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  return { token };
};

export const authService = {
  register,
  login,
};
