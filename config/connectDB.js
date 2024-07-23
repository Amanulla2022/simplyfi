const mongoose = require("mongoose");

// connecting to DataBase
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected successfully");
  } catch (err) {
    console.error(`error: ${err}`);
  }
};

module.exports = connectDB;
