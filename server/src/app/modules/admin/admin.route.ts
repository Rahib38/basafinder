import { Router } from "express";
import { adminController } from "./admin.controller";

const adminRoutes=Router()
adminRoutes.get("/users",adminController.getAllUser)
adminRoutes.patch("/users/:id",adminController.updateUser)
adminRoutes.delete("/users/:id",adminController.blockUser)
adminRoutes.get("/listings",adminController.getLandLoardsListing)
adminRoutes.patch("/listings/:id",adminController.updateLandLoardsListing)
adminRoutes.delete("/listings/:id",adminController.deleteLandloardsListing)


export default adminRoutes