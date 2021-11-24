const express=require('express');
const router = express.Router();

//Mostrar algo en pantalla
//al obtener un GET en la ruta inicial

router.get('/', (req, res)=>{
    res.render('index.html')
})

module.exports=router;