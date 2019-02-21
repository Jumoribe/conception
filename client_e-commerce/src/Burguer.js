import React from 'react';
import axios from 'axios';

export default class Burguer extends React.Component{
    state ={
        categoriesList:[], productsList:[]
       }
    componentDidMount(){
        this.findCategories();
    }
   
    findCategories = async()=>{
        let url = 'http://localhost:3001/categories/admin';
       try{
           const categories = await axios.get(url);
           this.setState({categoriesList: categories.data.myCategories})
           console.log(this.state.categoriesList, categories)
        }
        catch(error){
            console.log(error)              
        }
    }

    findProductsByCategory = async (id) => {
        this.props.history.push(`/products/products_by_category/${id}`)
        id =  id || this.props.match.params.categoryID;
        let url = `http://localhost:3001/products/products_by_category/${id}`;
        try{
            const category = await axios.get(url)            
            this.setState({productsList: category.data.productsByCategory})
            console.log({category})
        }
        catch(error){           
            console.log({error})
        }
    }
    render(){
        return(
            <div style={{display:this.props.display, backgroundColor: 'black', width: '65%'}} /*className='burguerMenu'*/ >
                <p style={decor.title}>PRODUCTS</p>
                <div>
                {
                this.state.categoriesList.map(ele=>{
                    return(  
                    <p onClick={()=>this.findProductsByCategory(ele._id)} style={decor.item}>{ele.category}</p>
                    )
                })
                }
                </div>
            </div>
        )
    }
}

const decor = {
    item:{
        color:'white',
        borderBottom: '1px solid white',
        fontSize: '20px'
    },
    title:{
        fontSize: '20px',
    }
}