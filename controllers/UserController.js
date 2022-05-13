const User = require("../models/userModel");

const RegisterUser = async (req, res) => {
    
    try {
        const {name,email,password}=req.body
      const AllUser = await User.create({
          name,email,password,
          avatar:{
              public_id:"this is a sample id",
              url:"profilepicUrl"
          }
      });
      res.status(200).json({
          status:"success",
          AllUser
      })
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};
module.exports = { RegisterUser };
