//REQUIRE
const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//Cors
app.use(cors({
  origin: '*'
}))


//MODELS
const Product = require('./models/productModel')
const Category = require('./models/categoryModel')

//ROUTER
const CategoryRouter = require('./router/categoryRouter')
const ProductRouter = require('./router/productRouter')
const UserRouter = require('./router/userRouter')

//ENV
require('dotenv').config()


//MIDDLEWARE
const authMiddleware = require('./middleware/auth')

//MONGODB CONNECTION
mongoose.connect('mongodb+srv://oguzhnvarli:oguzhnvarli@wissen11.8tuuxw2.mongodb.net/Wissen11?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDb Connected!')
  }).catch(error => console.log(error))



app.use(express.json())

app.get('/', (req, res) => {
  console.log('Node Server Worked!')
  res.send('Node Server Worked!')
})

//ROUTER
app.use('/category', CategoryRouter)
app.use('/product', ProductRouter)
app.use('/auth', UserRouter)

//MIDDLEWARE

app.use(authMiddleware)



//CORS


app.enable

app.listen('9000')




// function firstClass(){
// }

// let secondClass = () => {
// }

