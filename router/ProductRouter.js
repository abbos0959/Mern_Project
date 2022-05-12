const express = require("express");
const Router = express.Router();

const AllFunction = require("../controllers/ProductController");

Router.get("/product",AllFunction.GetAllProduct)
Router.post("/product/new",AllFunction.CreatProduct)
Router.put("/product/:id",AllFunction.UpdateProduct)
Router.delete("/product/:id",AllFunction.DeleteProduct)
Router.get("/product/:id",AllFunction.GetProductId)



module.exports=Router
