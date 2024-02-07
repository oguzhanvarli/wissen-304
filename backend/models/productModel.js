// const {Schema, default: mongoose} = require('mongoose')
//const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : [true, 'Price is Required!'],
    min : 0,
  },
  quantity : {
    type : Number,
    required : [true, 'Quantity is Required!'],
    min : 0,
  },
  image : {
    type : String,
    required: true
  },
  


})

const Product = mongoose.model('Product', productSchema)
module.exports = Product