const Products = require('../models/products');

class ProductsController{
    async find (req, res){
        try{
            const myProducts = await Products.find({});
            console.log(myProducts)
            res.send({myProducts})
        }
        catch (error){
            console.log(error)
        }
    }
    async findone (req, res){
        let id = req.params.id
        try{
            const myProduct = await Products.findOne({_id:id});
            res.send({myProduct})
        }
        catch (error){
            console.log(error)
        }
    }
    async findByCategory (req, res){
        console.log('===============',req.params)
        let {categoryID} = req.params;
        try{
            const productsByCategory= await Products.find({categoryID: categoryID})
            console.log(productsByCategory)
            res.send({productsByCategory})
        }
        catch(error){
            console.log(error)
        }
    }
    async findByDesigner (req, res){
        console.log('===============',req.body)
        let {designer} = req.body;
        try{
            const productsByDesigner= await Products.find({designer})
            console.log(productsByDesigner)
            res.send({productsByDesigner})
        }
        catch(error){
            console.log(error)
        }
    }
    async findByDescription (req, res){
        let {description} = req.params;
        console.log('==============================',description);
        try{
            const mySearch = await Products.find({description: {$regex : description}});
            res.send({mySearch})
        }
        catch(error){
            console.log(error)
        }
    }
    async add (req, res){
        let {title, designer, price, description, category, color, img, sale, stock, categoryID} = req.body;
        console.log('product req.body =',req.body)
        try{
            const addProduct = await Products.create({ title, designer, price, description, category, stock, color, img, sale, categoryID})
            console.log('=========>',addProduct)
            res.send({addProduct})    
        }
        catch(error){
            console.log(error)
        }
    }
    async delete (req, res){
        let id =req.body._id;
        try{
            const deleteProduct = await Products.remove({_id:id})
            res.send({deleteProduct})
            console.log(id)
        }
        catch(error){
            console.log(error)
        }
    }
    async update (req, res){
        let {newTitle, newDesigner, newPrice, newDescription, newCategoryID, newColor, newImg, id, newstock} = req.body
        try{
            const oldProduct = await Products.findOne({_id:id});
            const updateProduct = await Products.updateOne(
                {_id:id}, {$set:{
                title:newTitle || oldProduct.title,
                designer:newDesigner || oldProduct.designer,
                price:newPrice || oldProduct.price,
                description:newDescription || oldProduct.description,
                categoryID:newCategoryID || oldProduct.categoryID,
                color:newColor || oldProduct.color,
                img: newImg || oldProduct.img,
                stock: newstock || oldProduct.stock
                }
            })
            res.send({updateProduct})
            console.log('id-->',id, updateProduct)
        }
        catch(error){
            console.log(error) 
        }
    }
    async shoppingBag (req, res){   
        let {ids, quantity}= req.params;
        
        try{
            const bag = await Products.find({ _id: {$in :ids.split(',')}})
            res.send({bag})
        }
        catch (error){
            console.log(error)
        }
    }
    async purchase (req, res) {
        const stripe = require("stripe")("sk_test_aUVMmNykq5vrdz1r9HZlwnru");
        try{
            var x = stripe.charges.create(req.body);
            res.status(200).send({x})
            console.log(x)
        }
        catch(error) {
            res.status(500).send({error})
        } 
    }
    async takingFromTheStock (req, res) {
        let { infoForStock } = req.body;
        console.log("=====req.body from takingFromStock=====", req.body)
        try {

            infoForStock.shoppingCart.map( async ele=>{
                console.log('ele of stock ---> ', ele) 
                
                    let updatedStock = await Products.updateOne({_id:ele._id}, {$set:{stock: ele.stock-ele.quantity}})
                      console.log(ele._id, ele.stock, ele.quantity)
                })
                res.send('updated stock')
        }
        catch(error) {
            console.log(error)
            res.send(error)
        }
    }
    async wishList (req, res) {
        let { ids } = req.params;
        try{
            const list = await Products.find({_id: {$in :ids.split(',')}}) //this is to have the separete items in an array separate by comma
            console.log(list)
            res.send({list})
        }
        catch(error) {
            console.log(error)
        }
    }
}

module.exports =  new ProductsController