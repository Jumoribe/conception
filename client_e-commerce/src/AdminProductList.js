import React from 'react';
import axios from 'axios';
import './App.css';
//import { NavLink } from 'react-router-dom'

export default class AdminProductList extends React.Component{
    state ={
        productsList:[]
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('authToken'))
          if(!token){
              this.props.history.push('/')
          } 
    }
    goTop = () => {
            window.scrollTo(0, 0); 
    }
    componentDidMount () {
        this.findProducts();
    }
    findProducts = async () => {
        let url = 'http://localhost:3001/products';
        try{
            const products = await axios.get(url)
            this.setState({productsList: products.data.myProducts})
            console.log({products})
        }
        catch(error){
            
            console.log({error})
        }
    }
    goToCategories=() =>{
        this.props.history.push({pathname:"/admin/category"})
    }
    gotoUpdate = (ele) => {
        this.props.history.push({pathname:`/admin/category/product/update/${ele._id}`})
    }
    deleteProduct = async (id) => {
        let url='http://localhost:3001/products/delete';
        try{
            await axios.post(url, {_id:id})
            this.findProducts();
        }
        catch(error){
            
            console.log({error})  
        }
    }
    render(){
         return(
             <div>
                 <button onClick={this.goToCategories} style={decor.viewMoreBtn} className="buttons">Add Product</button>
             <div style={decor.small}>
                 <div style={decor.bagsDisplay}>
                 {
                     this.state.productsList.map ((ele, i) => { //the props come from myrouter.js
                         return(
                             <div>
                             {/* <NavLink to='/bags/:id' style={decor.navlink}> */}
                             {/* cambiar a donde va el navlink */}
                             <div style={decor.container} key={i}>
                                <div style={decor.height} className="imgHover"><img src={ele.img} style={decor.bags} alt={ele.title}/></div>
                                <div style={decor.title}>{ele.title}</div>
                                <div style={decor.designer}>{ele.designer}</div>
                                <div style={decor.price}>{ele.price}</div>
                                <div style={decor.title}>stock available: {ele.stock}</div>
                             </div>
                             {/* </NavLink> */}
                             {/* dont know how to add navlink con buttons */}
                             <div style={decor.btns}>
                             <button style={decor.button} className="buttons" onClick={()=>this.deleteProduct(ele._id)}>Delete</button>
                             <button style={decor.button} className="buttons" onClick={()=>this.gotoUpdate(ele)}>
                            Update
                             </button>
                            
                             </div>
                             </div>
                         )
                     })
                 }
                 </div>
                 {/* <button style={decor.viewMoreBtn} className="buttons">View more</button> */}
                 
             </div>
             <div style={decor.arrowContainer}><i className="fas fa-chevron-up" style={decor.arrow} onClick={this.goTop}></i></div>
             </div>
        )
     }
 }

 const decor = {
     small: {
         marginRight: '15%',
         marginLeft: '15%',
         marginTop: '2em'
     },
     bagsDisplay:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1em',
     },
     height: {
        height: '40vh' //vertical height
     },
     bags:{
         maxHeight: '100%',
         maxWidth: '100%',
         borderBottom: '2px solid white',
         position: 'relative',
         itemAlign: 'center'
     },
     container: {
        // border: '1px solid #ddd'
     },
     title:{
         textTransform: 'uppercase',
         position: 'relative',
         textAlign: 'center',
         marginTop: '1em'
     },
     designer: {
         color: 'rgb(161, 166, 175)',
         position: 'relative',
         textAlign: 'center'
     },
     price:{
         position: 'relative',
         textAlign: 'center'
     },
    viewMoreBtn: {
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '20px',
        paddingLeft: '20px',
        outline: 'none',
        marginBottom: '1em',
        marginTop: '2em',
        marginLeft: '46%',
    },
    arrow: {
        imgSize: '50%',
       
    },
    arrowContainer: {
        display: 'flex',
        justifyContent:'flex-end',
        marginRight:'2em',
        marginTop: '1em',
        fontSize: '30px',
    
    },
    navlink: {
        textDecoration: 'none',
        color: 'black'
    },
    button: {
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '10px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '100px',
        height: '25px',
        outline: 'none',
        marginTop: '2em',
        marginRight: '10px'
    },
    btns: {
        display: 'flex',
        justifyContent: 'center'
    }
   
 }