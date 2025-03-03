import { Types } from "mongoose";
import { TUser } from "../user/user.interface";

export interface IListing extends TUser {
    location: string;
    description: string;
    image: string;
    rent: number;
    bedrooms: number;
    landlord: Types.ObjectId;
  }