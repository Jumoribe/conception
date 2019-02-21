const Categories = require('../models/categories')

class CategoriesController{
    async find (req, res){
        try{
            const myCategories = await Categories.find({});
            res.send({myCategories})
        }
        catch (error){
            console.log(error)
        }
    }
    async add (req, res){
        let {category} = req.body;
        try{
            const addCategory = await Categories.create({category})
            console.log(addCategory)
            res.send({addCategory})    
        }
        catch(error){
            console.log(error)
        }
    }
    async delete (req, res){
        let id = req.body._id;
        try{
            console.log(id)
            const deleteCategory = await Categories.remove({_id:id})
            res.send({deleteCategory})
        }
        catch(error){
            console.log(error)
        }
    }
    async update (req, res){
        let {id, newCategory} = req.body;
        try{
            const updateCategory = await Categories.updateOne(
                {_id:id}, {$set:{category:newCategory}
            })
            res.send({updateCategory})
            console.log('id-->',id, 'newCategory-->', newCategory, 'Categories-->',Categories)
        }
        catch(error){
            res.send({error})
        }

    }
}

module.exports = new CategoriesController;