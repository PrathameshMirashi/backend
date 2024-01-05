const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductdetailsSchema = new Schema({
  id: {
    type: String,
  },
  Title: {
    type: String,
  },
  Cat: {
    type: String,
  },
  Price: {
    type: String,
  },
  Img: {
    type: String,
  },
});
const Productdetails = new mongoose.model(
  "productdetails",
  ProductdetailsSchema
);
module.exports = Productdetails;
