import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { landLoardsService } from './landlord.service';

const createLandloardsListing = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await landLoardsService.createLandloardsListing(body);
  sendResponse(res, {
    success: true,
    message: 'Create a new rental house listing!!!!!',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getLandLoardsListing=catchAsync(async(req,res)=>{
  const query =req.query
  const result = await landLoardsService.getAllLandloardsListing(query)

  sendResponse(res,{
    success:true,
    message:"Retrieve all rental listings posted by the landlord!!!!",
    statusCode:StatusCodes.OK,
    data:result
  })
})
const getSingleLandLoardsListing=catchAsync(async(req,res)=>{
  const id =req.params.id
  const result = await landLoardsService.singleGetAllLandloardsListing(id)

  sendResponse(res,{
    success:true,
    message:"Retrieve Single rental listings posted by the landlord!!!!",
    statusCode:StatusCodes.OK,
    data:result
  })
})
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


const deleteLandloardsListing=catchAsync(async(req,res)=>{
  const id =req.params.id
  const result = await landLoardsService.deleteLandloardsListing(id)
  sendResponse(res,{
    success:true,
    message:"Remove a rental listing!!!!",
    statusCode:StatusCodes.OK,
    data:result
  })
})

const getAllLandloardsRequest=catchAsync(async(req,res)=>{
  const id=req.params.id
  const query= req.query
  const result = await landLoardsService.getLandloardsRequest(id,query)
  sendResponse(res,{
    success:true,
    message:"Retrieve all rental requests for the listings posted by the landlord!!!!",
    statusCode:StatusCodes.OK,
    data:result
  })
})


export const landloardsController = {
  createLandloardsListing,getLandLoardsListing,getSingleLandLoardsListing,updateLandLoardsListing,deleteLandloardsListing,
  getAllLandloardsRequest
};
