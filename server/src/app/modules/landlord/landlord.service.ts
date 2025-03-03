import { IListing } from './landlord.interface';
import { Listing } from './landlord.model';

const createLandloardsListing = async (payload: IListing) => {
  const result = await Listing.create(payload);
  return result;
};

const getAllLandloardsListing = async (query: Record<string, unknown>) => {
  const result = await Listing.find(query);
  return result;
};

const singleGetAllLandloardsListing = async (_id: string) => {
  const result = await Listing.findById(_id);
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

export const landLoardsService = {
  createLandloardsListing,
  getAllLandloardsListing,
  singleGetAllLandloardsListing,
  updateLandloardsListing,
  deleteLandloardsListing,
};
