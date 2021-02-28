
const Cliente = require('../models/clientes');


exports.newClient = async (req,res,next)=>{
    const ClienteNuevo = new Cliente(req.body)
    try {
        await ClienteNuevo.save();
        res.json({ mensaje:'nuevo cliente agregado' })
    } catch (error) {
        console.log(error.code)
        next()
    }
}
exports.Clients = async (req,res,next)=>{
   try {
       const clientes= await Cliente.find({})
       res.json({ clientes })
   } catch (error) {
       
   }
}
exports.ShowClient = async (req,res,next)=>{
        console.log(req.params.id)
        const cliente= await Cliente.findById(req.params.id)
        console.log(cliente)
        if (!cliente) {
            res.json({ mensaje:'El cliente no existe' })
            next();
        }
        res.json({ cliente })
    
 }
 exports.UpdateClient = async (req,res,next)=>{ 
    try {
        const cliente= await Cliente.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true
        })
        res.json(cliente)
    } catch (error) {
        console.log(error)
        next()
    }
 }
 exports.DeleteClient = async (req,res,next)=>{ 
    try {
        await Cliente.findOneAndDelete({id:req.params.id})
        res.json({mensaje:'Cliente eliminado'})
    } catch (error) {
        console.log(error)
        next()
    }
 }
