import React from 'react';
import axios from 'axios';

export default class Favorites extends React.Component {
state = {
    title: '',
    color: '',
    price: '',
    img: '',
    _id: '',
    wishList: [],
    shoppingCart: [],
    id: '',
    size: 'U'
}

componentDidMount () {
    this.showProductsInWishList();
  }
goShopping = () => {
    this.props.history.push({pathname:'products'})
}
gotoBag = () => {
    this.props.history.push({pathname:'shoppingcart'})
}
addToBag = async (ele) => {
    debugger
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    let wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    let _id = this.props.match.params.id
    console.log(shoppingCart, wishList)
    const product = await axios.get(`http://142.93.228.2/server/products/product/${this.props.match.params.id}`)
    var index = shoppingCart.findIndex(el=> el._id === ele._id);
    var indexInWishList = wishList.findIndex(el=> el._id === ele._id)
    var stock = product.data.myProduct.stock;
    if ( stock > 0 && index === -1 ){
        shoppingCart.push({_id:_id, quantity:1})
    } else if(index > -1 && stock > shoppingCart[index].quantity){
        //alert('already in your cart')
        shoppingCart[index].quantity += 1                
    } else{ alert('out of stock')} 
    wishList.splice(indexInWishList, 1)
    this.setState({wishList})
    localStorage.setItem('wishList', JSON.stringify(wishList))
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    //this.setState({ shoppingCart },()=>console.log(this.state))
    console.log("this is the function addtobag of wishlist ", shoppingCart)
}
delete = (ele) => {
    console.log("this is the ele of delete in wishlist ", ele)
    let { wishList } = this.state 
    var index = wishList.findIndex(el => el._id === ele._id);
    wishList.splice(index, 1)
    this.setState({wishList})
    localStorage.setItem('wishList', JSON.stringify(wishList))
}
showProductsInWishList = async () => {
    let wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    debugger
    var wishList_ids = wishList.map(ele=>ele._id);
    let url = `http://142.93.228.2/server/products/products_in_wishlist/${wishList_ids}`;
    try{
        const products_wishlist = await axios.get(url);
        var newWishList = [];
        products_wishlist.data.list.forEach((ele, i)=>{
         var index = wishList.findIndex(el => el._id === ele._id);
         if(index > -1){
           var obj = {...ele, ...wishList[index]}
         }
         newWishList.push(obj);
        });
        this.setState({wishList:newWishList})
        console.log(this.state.wishList)
    }
    catch(error){
        console.log({error})
    }
  }

render(){
    let { wishList } = this.state
return(
    <div style={decor.small}>
    <p style={{...decor.register, ...decor.border}}> My wish list</p>
    <div style={decor.borderItem}>
    {['product','description','size','color','amount', 'add in bag','delete',].map((ele,i)=>(
        <p style={decor.descriptions}>{ele} </p>
    ))}
        </div>
    <div>
    {
        wishList.map(ele=>{
            return( 
                <div style={decor.borderItem}>
                    <div style={decor.image}><img style={decor.pic}src={ele.img} alt='pic'/></div> 
                    <div style={decor.items}>{ele.title}</div>
                    <div style={decor.items}>{this.state.size}</div>
                    <div style={decor.items}>{ele.color}</div>
                    <div style={decor.items}>{ele.price}</div>
                    <div style={decor.trash}><i onClick={()=>this.addToBag(ele)} class="fas fa-shopping-bag"></i></div>
                    <div style={decor.trash}><i onClick={()=>{this.delete(ele)}} class="fas fa-trash"></i></div>
                </div>
            )
        })
    }  
    </div>  
    <div style={decor.border2}></div>
    <div style={decor.grid}>
        <button 
        onClick={this.goShopping}
        className='buttons' style={decor.buttonLeft}>Continue Shopping</button>  
        <button 
        onClick={this.gotoBag}
        className='buttons' style={decor.button}>Go to Bag</button>
    </div>  
    </div>
    )
}
}

const decor = {
    small: {
        width: '70%',
        margin: 'auto'
    },
    register: {
        fontSize: '30px',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    borderItem:{
        display: 'grid',
        gridTemplateColumns: '1.5fr 2fr 0.8fr 1fr 1fr 1fr 1fr',
        borderBottom: '1px solid rgb(242, 242, 242)',
    },    
    border: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingTop: '2em',
        paddingBottom: '1em'
    },
    image:{
        height:'15vh',
        position: 'relative',
        display: 'block',
        margin: '15px auto'
    },
    pic:{
        maxWidth: '100px',
        maxHeight: '100px',
    },
    trash:{
        fontSize:'15px',
        position: 'relative',
        display: 'block',
        margin: 'auto'
    },
    descriptions:{
        position: 'relative',
        display: 'block',
        margin: 'auto',
        fontSize: '15px',
        textTransform: 'uppercase',
        paddingTop: '2em',
        marginBottom: '1em'
    },
    items:{
        position: 'relative',
        display: 'block',
        margin: 'auto'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '220px',
        height: '40px',
        outline: 'none',
        marginTop: '2em',
        marginLeft: 'auto',
    },
    buttonLeft:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '220px',
        height: '40px',
        outline: 'none',
        marginTop: '2em',
        marginRight: 'auto',
    },
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    border2:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingTop: '2em' 
    },
    icons:{
        fontSize: '12px'
    },
}