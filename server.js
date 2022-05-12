const env = require("dotenv").config();
const express=require("express")
const app=require("./app")
const ConnectDB = require("./config/db");
ConnectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT;

app.listen(  PORT,"127.0.0.1", console.log("Server ishga tushdi"));
