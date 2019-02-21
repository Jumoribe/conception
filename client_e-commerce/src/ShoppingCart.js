import React from 'react';
import SoldOut from './SoldOut'
import axios from 'axios'

export default class ShoppingCart extends React.Component {
state = {
    total:0,
     title: "", 
     stock:'',
     price: "", 
     color:'', 
     img:'', 
     _id:'',
     shoppingCart:[],
     display:'none',
     id:''
}
componentDidMount = ()=>{
    this.showProductsInBag();
};
showProductsInBag = async () => {    
    let cart = JSON.parse( localStorage.getItem('shoppingCart'))|| [];
    debugger
    let cart_ids = cart.map(ele=>ele._id);
    let url = `http://localhost:3001/products/products_in_bag/${cart_ids}`;
    try{
        const products_in_bag = await axios.get(url);
        debugger
        var newCart = [];
        products_in_bag.data.bag.forEach((ele, i) => {
            var index = cart.findIndex(el => el._id === ele._id);
            if(index > -1){
                var obj = {...ele, ...cart[index]}
            }
            newCart.push(obj);
        });
        debugger
        this.setState({shoppingCart: newCart},()=>{
            console.log(this.state)
        })
        this.handleTotal()
        //console.log('array of ids===>', cart_ids, 'shoppingCart========>', cart, '====== joined array', this.state.shoppingCart)
    }
    catch(error){        
        console.log({error})
    }
}
handleTotal = () =>{
    let total = 0
        if (this.state.shoppingCart){
            this.state.shoppingCart.forEach((ele, i)=>{
                var subtotal = Number(ele.price * ele.quantity)
                total += subtotal;
            })
        }    
    this.setState({total})
}

goShopping=()=>{
    this.props.history.push({pathname:"/products"})
}
checkOut=()=>{
    if(this.props.loggedIn === false){
        this.props.history.push({pathname:"/guestform", state:{total:this.state.total}}) 
    } else {
        this.props.history.push("/checkout")
    }     
}
deleteFromCart =(ele)=>{
    console.log( 'this is the ele from delete item', ele)
    const {shoppingCart} = this.state
    var index = shoppingCart.findIndex(el => el._id === ele._id);
    shoppingCart.splice(index, 1)
    this.setState({shoppingCart})
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}
increaseOne = (i)=>{
    let shoppingCart  = this.state.shoppingCart;
    debugger
    if (shoppingCart[i].stock > 0 && shoppingCart[i].quantity <  shoppingCart[i].stock){
        shoppingCart[i].quantity++;
    }else{ alert('out of stock')}
    debugger
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    this.showProductsInBag();
}
decreaseOne = (i) => {
    let shoppingCart  = this.state.shoppingCart;
    if (shoppingCart[i].quantity>1) {
        shoppingCart[i].quantity--;
    } else{ 
        //alert('you wiil remove it?')
        var decision = window.confirm('Only one left, Are you sure that you wany delete?');
        if(decision){
            shoppingCart.splice(i, 1)
            console.log('==================>', i)
            this.setState({shoppingCart})
        }else{
            shoppingCart[i].quantity =1
        }
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    this.showProductsInBag();
}
deleteAllCart = () =>{
    let { shoppingCart } = this.state 
    shoppingCart.splice(0)
    this.setState({shoppingCart})
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    this.handleTotal();
}
render(){
let {shoppingCart, total} = this.state
return(
    <div style={decor.small}>
        <p style={{...decor.register, ...decor.border}}>Shopping Cart</p>
        <div style={decor.borderItem}>
        {
        ['product','description','color','units','amount','delete'].map((ele,i)=>(
            <p style={decor.descriptions}>{ele}</p>
        ))
        }
        </div>
        <div>
        {
        shoppingCart.map((ele,i)=>{
            return( 
                <div key={i} style={decor.borderItem}>
                <div style={decor.image}><img style={decor.pic}src={ele.img} alt='pic'/></div> 
                <div style={decor.items}>{ele.title}</div>
                <div style={decor.items}>{ele.color}</div>
                <div style={decor.items}>
                    <i onClick={()=>this.decreaseOne(i)} style={decor.icons} className='fas fa-minus'></i>
                        <span style={decor.quantity}>{ele.quantity}</span>
                    <i onClick={()=>this.increaseOne(i)} style={decor.icons} className='fas fa-plus'></i>
                    <SoldOut
                    display={this.state.display}
                    />
                </div>
                    <div style={decor.items}>{ele.price}</div>
                    <div style={decor.trash}><i onClick={()=>this.deleteFromCart(ele)} className="fas fa-trash"></i></div>
                </div>
            )
        })
        }  
        </div>  
        <button onClick={this.deleteAllCart} style={decor.deleteAllBtn}>Delete All</button>
        <div style={decor.border2}></div>
        <div style={decor.total}>Total: {total} EUR</div>
        <div style={decor.grid}>
            <button 
            onClick={this.goShopping}
            className='buttons' style={decor.buttonLeft}>Continue Shopping</button>  
            <button 
            onClick={this.checkOut}
            className='buttons' style={decor.button}>Check Out</button>
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
        gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr',
        borderBottom: '1px solid rgb(242, 242, 242)',
    },    
    border: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingTop: '2em',
        paddingBottom: '2em'
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
        display: 'flex',
        marginTop: '2em',
        marginLeft: 'auto'
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
        fontSize: '12px',
        margin: '10px'
    },
    quantity:{
        border: '1px solid grey',
        fontSize: '16px',
        padding: '4px'
    },
    total:{
        display: 'flex',
        justifyContent: 'flex-end',
        textTransform: 'uppercase',
        marginTop: '1em',
        fontSize: '19px',
        fontWeight: 'bold'
    },
    deleteAllBtn: {
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '10px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '100px',
        height: '20px',
        outline: 'none',
        marginTop: '2em',
        marginLeft: '90%'
      }
}