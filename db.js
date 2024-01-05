const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://SHUDEES:SHUDEES@cluster0.kajzkix.mongodb.net/SHUDEESDB"
    );
    console.log(`Database connected  to ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

module.exports = mongoDB;
