const express = require('express');
const app = express();
const port ='5000';
const routes = require('./router/index');
const bodyParser = require('body-parser');

require('./config/connect')
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',routes())
app.listen(port,()=>console.log(`Servidor activo por el puerto ${port}`,__dirname));