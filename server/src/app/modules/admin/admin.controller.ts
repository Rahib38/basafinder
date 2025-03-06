import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { landLoardsService } from '../landlord/landlord.service';
import { adminService } from './admin.service';

const getAllUser = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await adminService.getAllUser(query);
  sendResponse(res, {
    success: true,
    message: 'Retrieve all user(tenants, landlords) accounts.!!!!!',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await adminService.UpdateUser(id, body);
  sendResponse(res, {
    success: true,
    message: 'Update user roles!!!!!',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const blockUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await adminService.blockUser(id);
  sendResponse(res, {
    success: true,
    message: 'User deleted successfully!!!!!',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const getLandLoardsListing = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await landLoardsService.getAllLandloardsListing(query);

  sendResponse(res, {
    success: true,
    message: 'Retrieve all rental listings posted by the landlord!!!!',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const updateLandLoardsListing=catchAsync(async(req,res)=>{
    const id =req.params.id
    const rental=req.body
    const result = await landLoardsService.updateLandloardsListing(id,rental)
  
    sendResponse(res,{
      success:true,
      message:"Update a specific rental listing!!!!",
      statusCode:StatusCodes.OK,
      data:result
    })
  })

const deleteLandloardsListing = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await landLoardsService.deleteLandloardsListing(id);
  sendResponse(res, {
    success: true,
    message: 'Remove a rental listing!!!!',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const adminController = {
  getAllUser,
  updateUser,
  blockUser,
  getLandLoardsListing,deleteLandloardsListing,updateLandLoardsListing
};
