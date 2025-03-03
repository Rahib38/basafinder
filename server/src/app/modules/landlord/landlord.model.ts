import { model, Schema } from 'mongoose';
import { IListing } from './landlord.interface';

const ListingSchema = new Schema<IListing>(
  {
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    rent: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    landlord: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);
export const Listing = model<IListing>('Listing', ListingSchema);
