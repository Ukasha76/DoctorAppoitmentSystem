import mongoose from "mongoose";

const connectDB = async () => {
  console.log("reached here1");
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });
  console.log("reached here");
  console.log(process.env.MONGODB_URI);
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
};

export default connectDB;
