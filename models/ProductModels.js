const { Schema, model } = require("mongoose");

const ProductModal = new Schema({
  name: {
    type: String,
    required: [true, "Iltimos Product Nomini Kiriting"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Iltimos Product Description Kiriting"],
  },
  price: {
    type: String,
    required: [true, "Iltimos Product Priceni Kiriting"],
    maxlength: [8, "Price maximal 8 simvoldan iborat bo`lishi kerak"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Iltimos Categoriya kiriting"],
  },
  stock: {
    type: Number,
    required: [true, "Iltimos Stock Kiriting"],
    maxlength: [4, "maximal uzunlik 4"],
    default: 1,
  },
  numofRevievs:{
      type:String,
      default:0
  },
  reviews:[
      {

        name:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
      }
  ],
  creatdat:{
      type:Date,
      default:Date.now()
  }

});
module.exports = model("Product", ProductModal);
