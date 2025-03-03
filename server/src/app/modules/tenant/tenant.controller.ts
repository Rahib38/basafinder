import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { tenantService } from './tenant.service';

const createRentalHouseRequest = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await tenantService.createRentalRequest(body);
  sendResponse(res, {
    success: true,
    message: 'Create a new rental request for a house!!!!!',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getAllRentalHouseRequest = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await tenantService.getAllRentalRequest(query);
  sendResponse(res, {
    success: true,
    message: ' Retrieve all rental requests submitted by the tenant!!!!!',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const updateTanantProfile=catchAsync(async(req,res)=>{
    const id=req.params.id
    const body=req.body
    const result = await tenantService.updateTanantProfile(id,body)
    sendResponse(res, {
        success: true,
        message: 'Update tenant profile!!!!!',
        statusCode: StatusCodes.OK,
        data: result,
      });
})

export const tenantController = {
  createRentalHouseRequest,
  getAllRentalHouseRequest,updateTanantProfile
};
