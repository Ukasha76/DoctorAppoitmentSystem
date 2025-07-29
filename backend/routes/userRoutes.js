import express from "express";
import authUser from "../middleware/authUser.js";
import {
  registeruser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
} from "../controllers/userController.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registeruser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", authUser, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);
userRouter.post(
  "/book-appointment",
  upload.single("image"),
  authUser,
  bookAppointment
);
export default userRouter;
