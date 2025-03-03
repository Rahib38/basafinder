import { Router } from "express";
import { tenantController } from "./tenant.controller";

const tenantRoutes=Router()
tenantRoutes.post("/requests",tenantController.createRentalHouseRequest)
tenantRoutes.get("/requests",tenantController.getAllRentalHouseRequest)
tenantRoutes.patch("/profile/:id",tenantController.updateTanantProfile)

export default tenantRoutes