import { Router } from "express";
import { landloardsController } from "./landloard.controller";

const landloardRouter=Router()

landloardRouter.post("/listings",landloardsController.createLandloardsListing)
landloardRouter.get("/listings",landloardsController.getLandLoardsListing)
landloardRouter.get("/listings/:id",landloardsController.getSingleLandLoardsListing)
landloardRouter.patch("/listings/:id",landloardsController.updateLandLoardsListing)
landloardRouter.delete("/listings/:id",landloardsController.deleteLandloardsListing)
landloardRouter.get("/requests",landloardsController.getAllLandloardsRequest)

export default landloardRouter