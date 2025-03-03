import { Types } from 'mongoose';

export interface IRentalRequest {
  rentalHouse: Types.ObjectId;
  tenant: Types.ObjectId;
  status: 'pending' | 'approved' | 'rejected';
  landlordPhone?: string;
  paymentStatus?: 'pending' | 'paid';
  additionalMessage?: string;
}
