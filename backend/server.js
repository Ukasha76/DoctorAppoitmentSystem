import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import adminRouter from "./routes/adminRouter.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";
//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//MIDDLE WARES
app.use(express.json());
app.use(cors());

//api endpoints

app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
//can access add-doctor from localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API working now");
});

app.listen(port, () => console.log("Server Started", port));
