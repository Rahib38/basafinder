/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['tenant', 'admin', 'landlord'],
    default: 'tenant',
  },
},  { timestamps: true });

userSchema.pre('save', async function(next){
    const user=this
    user.password=await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    )
    next()
})

export const User = model<TUser>('User', userSchema);
