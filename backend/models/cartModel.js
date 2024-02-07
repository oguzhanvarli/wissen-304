const { default: mongoose } = require("mongoose");


const cartModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required : true
  },
  productId : {
    type: String,
    required: true
  }
})

const Cart = mongoose.model('cart', cartModel)
module.exports = Cart