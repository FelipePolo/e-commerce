import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name:{type:String,required:true},
  descrip:{type:String,required:true},
  starts:{type:Number,required:true,default:0},
  img:{type:Array,required: true,default:[]},
  alt: {type:String,required:true,default:"imagen"},
  oldprice:{type:Number,required:true,default:0},
  price:{type:Number,required:true},
  time:{type:String,required:true},
  stock:{type:Number,required:true}
})

const productsmodel = mongoose.model("products",productSchema)

export default productsmodel