/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: { type: String, required: true, unique: true },
    number: { type: String, default:'' },
    password: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ['tenant', 'admin', 'landlord'],
      default: 'tenant',
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<TUser>('User', userSchema);
