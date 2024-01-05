const express = require("express");
const router = new express.Router();
const Productdetails = require("./productDetails");

router.get("/products", async (req, res) => {
  try {
    const getProduct = await Productdetails.find({}).sort({ id: 1 });
    res.send([getProduct]);
  } catch (error) {
    res.status(400).send(error);
  }
});

//we will handle  get req of indivdual
router.get("/products/:id", async (req, res) => {
  try {
    const getProduct = await Productdetails.findById(req.params.id);
    res.send(getProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
