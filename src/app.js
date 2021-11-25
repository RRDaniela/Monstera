const path = require('path');
const express=require('express');
const app= express();
const morgan=require('morgan');
const mongoose=require('mongoose');


//Conexión a la base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db=>console.log('DB conectada'))
    .catch(err=>console.log(err));

//Importar rutas
const indexRoutes = require('./routes/index');

//Configuración
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname+ "/views"));
app.use(express.static(__dirname+ "/img"));
app.use(express.static(__dirname+ "/css"));
app.use(express.static(__dirname+ "/js"));

//Middlewares
app.use(morgan('dev'));
//Entender los datos que envía un usuario por un formulario
app.use(express.urlencoded({extended:false}))

//rutas
app.use(indexRoutes);

//Levantando el server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${app.get('port')}`);
})