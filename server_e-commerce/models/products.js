const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        title:{type:String, unique: true, required: true},
        description:{type:String, unique: false, required: true},
        designer:{type:String, unique: false, required: true},
        price:{type:Number, unique: false, required: true},
        color:{type:String, unique: false, required: true},
        img:{type:String, unique: false, required: false},
        sale:{type:String, unique: false, required: false,  default:false},
        saleDiscount:{type:Number, required: false, min:0, max:100 },
        categoryID:{type:mongoose.Types.ObjectId, ref:'Categories'},
        stock: {type: Number, unique: false, required:true}
    });
const Products = mongoose.model('products', productSchema)

module.exports = Products;