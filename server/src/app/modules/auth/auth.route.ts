import { authValidation } from './auth.validation';
import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from '../../middlewares/validateRequest';

const authRouter=Router()
authRouter.post('/register',authController.register)
authRouter.post('/login',validateRequest(authValidation.loginValidation) ,authController.login)

export default authRouter;