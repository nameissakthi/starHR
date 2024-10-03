import express from "express"
import { addService, listService, singleService, removeService } from "../controller/serviceController.js"

const serviceRouter = express.Router()

serviceRouter.post("/add", addService)
serviceRouter.get("/list", listService)
serviceRouter.get("/single/:id", singleService)
serviceRouter.get("/remove", removeService)

export default serviceRouter