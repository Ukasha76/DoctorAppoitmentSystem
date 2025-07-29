import express from "express";
import {
  addDoctor,
  loginAdmin,
  allDoctor,
} from "../controllers/adminController.js";
import upload from "../middleware/multer.js";
import authAdmin from "../middleware/authAdmin.js";
import { changeAvailbility } from "../controllers/doctorController.js";
const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/all-doctors", allDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/change-availbility", changeAvailbility);

export default adminRouter;
