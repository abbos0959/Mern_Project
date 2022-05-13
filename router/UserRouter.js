const express=require("express")
const { RegisterUser } = require("../controllers/UserController")
const Router=express.Router()

Router.route("/register").post(RegisterUser)