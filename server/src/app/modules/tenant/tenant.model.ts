import { model, Schema } from 'mongoose';
import { IRentalRequest } from './tenant.interface';

const rentalRequestSchema = new Schema<IRentalRequest>(
  {
    rentalHouse: {
      type: Schema.Types.ObjectId,
      ref: 'Listing',
      required: true,
    },
    tenant: { type: Schema. Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    landlordPhone: { type: String },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid'],
      default: 'pending',
    },
    additionalMessage: { type: String },
  },
  { timestamps: true },
);

export const RentalRequest = model<IRentalRequest>(
  'RentalRequest',
  rentalRequestSchema,
);
