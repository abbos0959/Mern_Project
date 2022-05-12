const Product = require("../models/ProductModels");
const ApiFeatures = require("../utils/ApiFeatures");
const ErrorHandler = require("../utils/ErrorHandle");

const GetAllProduct = async (req, res) => {
  try {
    const apifeature = new ApiFeatures(Product.find(), req.query).search().filter();
    const product = await apifeature.query;
    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};


const CreatProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      status: "bunday post yo`q",
    });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success update",
      product,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed  update",
    });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const Deleteprod = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      Deleteprod,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed Deleted",
    });
  }
};

const GetProductId = async (req, res) => {
  try {
    const GetIdProduct = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      GetIdProduct,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed getbyId",
    });
  }
};
module.exports = {
  GetAllProduct,
  CreatProduct,
  UpdateProduct,
  DeleteProduct,
  GetProductId,
};
