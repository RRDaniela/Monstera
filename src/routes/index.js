const express=require('express');
const router = express.Router();
const Product = require("../models/products")

//Mostrar algo en pantalla
//al obtener un GET en la ruta inicial

router.get('/', (req, res)=>{
    res.render('index.html')
})

router.post('/add',async (req, res)=>{
    //console.log(new products(req.body));
    //res.send("Recibido");
    const product = new Product(req.body);
    await product.save()
    res.send('received');
})

module.exports=router;