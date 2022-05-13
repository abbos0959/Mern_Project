const mongoose = require("mongoose");
const validator = require("validator");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Iltimos Ismingizni Kiriting"],
    maxlength: [30, "Maximal uzunlik 30 ta belgidan iborat"],
    minlength: [4, "minimal uzunlik 4 ta belgidan iborat"],
  },
  email: {
    type: String,
    required: [true, "Iltimos email Kiriting"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password:{
      type:String,
      required:[true,"Iltimos Password Kiriting"],
      minlength:[8,"Password uzunligi 8 belgidan iborat"],
      select:false
  },
  avatar:{
      public_id:{
          type:String,
          required:true
      },
      url:{
          type:String,
          required:true
      }
  },
  role:{
      type:String,
      default:"user"
  },
  resetPassswordToken:String,
  resetPassswordExpire:Date

});

module.exports = mongoose.model("User", UserModel);
