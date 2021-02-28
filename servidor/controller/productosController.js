const { v4: uuidv4 } = require('uuid')
const Cliente = require('../models/clientes');


exports.newProduct = async (req,res,next)=>{
res.json({codigo: uuidv4()});

}
exports.ProductsList = async (req,res,next)=>{
    
}
exports.ProductOne = async (req,res,next)=>{
    
}
exports.ProductUpdate = async (req,res,next)=>{
    
}
exports.ProductDelete = async (req,res,next)=>{
    
}