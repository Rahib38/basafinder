import { Types } from 'mongoose';

export interface IRentalRequest {
  landlord: Types.ObjectId;

  rentalHouse: Types.ObjectId;
  tenant: Types.ObjectId;
  status: 'pending' | 'approved' | 'rejected';
  landlordPhone?: string;
  paymentStatus?: 'pending' | 'paid';
  additionalMessage?: string;
}
