const express = require("express");
const app = express();
app.use(express.json())
const errorMidlWare=require("./Middlware/error")



app.use("/api",require("./router/ProductRouter"))
app.use(errorMidlWare)

module.exports=app
//          abbosecommerce