import React from 'react';
import axios from 'axios';

export default class Product extends React.Component{
    state={
        sale:'' , 
        _id: "",
        shoppingCart:[],
        stock:'',
        newstock:''
    }
    componentDidMount(){
        this.findProduct()
        let { shoppingCart } = this.state
        var productStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        
        this.setState({shoppingCart:productStorage})
        console.log( "this is the shopping car ", shoppingCart)
    }
    findProduct = async () => {
        
        let url = `http://localhost:3001/products/product/${this.props.match.params.id}`;
        try{
            const product = await axios.get(url)
            
            this.setState({stock: product.data.myProduct.stock, sale:product.data.myProduct.sale , _id:product.data.myProduct._id, title:product.data.myProduct.title, designer:product.data.myProduct.designer, price:product.data.myProduct.price, color:product.data.myProduct.color, img:product.data.myProduct.img, description:product.data.myProduct.description})
            console.log({product})
        }
        catch(error){
            
            console.log({error})
        }
    }
    addToBag = async () => {
        let shoppingCart  = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        debugger
        let _id = this.props.match.params.id
            const products = await axios.get(`http://localhost:3001/products/product/${this.props.match.params.id}`);

            debugger
            var index = shoppingCart.findIndex(ele => ele._id === _id);
            if (products.data.myProduct.stock > 0 && index === -1 ){
                shoppingCart.push({_id:_id, quantity:1})
            } else if(index > -1 && products.data.myProduct.stock > shoppingCart[index].quantity ){
                //alert('already in your cart')
                shoppingCart[index].quantity += 1                
            } else{ 
                alert('out of stock')
            } 
            //=====================when do the order confirmation======================
            // let url = `http://localhost:3001/products/remove_from_stock`
            // await axios.post(url, {id:this.props.match.params.id})    
            // console.log('===============>', this.state.newstock) 
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
     }

    render(){
        let { title, designer, price, img, description} = this.state;
        return(
        <div style={decor.small}>
            <div className='productGrid'>
            <div>
                <img src={img} style={decor.img} alt='productPic'/>
            </div>
            <div style={decor.product}>
                <div style={decor.title}>{title}</div>
                <div style={decor.designer}>{designer}</div>
                <div>{price}</div>
                <div style={decor.border}>{description}</div>
                <button onClick={this.addToBag} style={decor.button} className="buttons">Add</button>
            </div>
        </div>
        </div>
         )
    }
}
const decor = {
    grid:{
        display:'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    small:{
        width: '70%',
        marginLeft: '9em',
    },
    img:{
        paddingTop: '2em',
        Height: '400px',
        width: '80%'
    },
    product:{
        maxHeight: '400px',
        width: '80%',
        paddingTop: '6em',
        fontFamily:"'EB Garamond', serif"
    },
    border:{
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        padding: '10px auto',
        textAlign: 'justify',
       // text-ustify: inter-word
    },
    title:{
        fontSize: '20px'
    },
    designer:{
        color: 'grey'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '1px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '260px',
        height: '30px',
        outline: 'none',
        marginTop: '2em'
    }
}