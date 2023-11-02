import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/car_showroom_dev");
    console.log("success");
  } catch (error) {
    console.log("fail");
  }
}

export { connect };
