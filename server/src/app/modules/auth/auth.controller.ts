import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';

//!Register controller 
const register = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await authService.register(body);

  sendResponse(res, {
    success: true,
    message: 'User register successFully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});



const login = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await authService.login(body);
  res.cookie("token", result?.token, { httpOnly: true });

  sendResponse(res, {
    success: true,
    message: 'User login successFully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const authController={
    register,login
}