const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre:{
        type: String,
        
    },
   precio:{
       type:Number,
       trim:true
   },
   codigo:{
    type:String,
    unique:true,
   },
   image:{
       type:String
   }
})

module.exports= mongoose.model('productos',productosSchema)