//Definir un schema

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Producto = new Schema({
    title:String,
    descriptrion:String,
    precio:Number
});

module.exports = mongoose.model('products', Producto);