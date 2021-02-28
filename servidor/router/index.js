const express = require('express'),
      router = express.Router(),
      clienteController = require('../controller/clienteController'),
      productosController = require('../controller/productosController');



module.exports = function () {
    router.get('/',(req,res)=>{
        res.send('hola') 
     })
     /**
      * Clientes
      */
    router.post('/clientes',clienteController.newClient);//crear
    router.get('/clientes',clienteController.Clients); //listar
    router.get('/clientes/:id',clienteController.ShowClient); //buscar
    router.put('/clientes/:id',clienteController.UpdateClient); //actualizar
    router.delete('/clientes/:email',clienteController.DeleteClient);//borrar

    /**
      * Productos
      */
     router.post('/productos',productosController.newProduct);//crear
     router.get('/productos',productosController.ProductsList); //listar
     router.get('/productos/:id',productosController.ProductOne); //buscar
     router.put('/productos/:id',productosController.ProductUpdate); //actualizar
     router.delete('/productos/:email',productosController.ProductDelete);//borrar

    return router
}