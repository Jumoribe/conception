import React from 'react';
//import {Elements, StripeProvider} from 'react-stripe-elements';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './NavBar';
import Header from './Header';
import AdminNew from './AdminNew';
import AdminLogin from './AdminLogin';
import AdminCategory from './AdminCategory';
import AdminProductList from './AdminProductList';
import AdminUpdate from './AdminUpdate';
import Homepage from './Homepage';
import Footer from './Footer';
import UserRegisterForm from './UserRegisterForm';
import UserBuy from './UserBuy';
import ShoppingCart from './ShoppingCart';
import OrderMsg from './OrderMsg';
import Favorites from './Favorites';
import UserLogin from './UserLogin';
import Products from './Products';
import Product from './Product';
import Sidebar from './SideBar';
import AdminUpdMsg from './AdminUpdMsg';
import Contact from './Contact';
import Privacy from './Privacy';
import FAQ from './FAQ';
import TermsOfUse from './TermsOfUse';
import AdminUpdCategory from './AdminUpdCategory';
import GuestBuyForm from './GuestBuyForm';
import UsersList from './UsersList';
import EmailFromUser from './EmailFromUser';
import SecretComponent from './SecretComponent';
import CheckoutForm from './CheckoutForm';
import UserStripeButton from './UserStripeButton';
import axios from 'axios'

export default class MyRouter extends React.Component{
  state = {
    loggedIn:false,
    productsList:[]
  }
  componentDidMount(){
      var token = localStorage.getItem('authToken')
      // token ? this.setState({isLoggedIn:true}) : null
      if(token) {
        this.setState({loggedIn:true})
      } else {
        this.setState({loggedIn:false})
      }
      this.findProducts();
      //this.search();
  }
  isLoggedIn = (bool, email) => {
    
      this.setState({loggedIn:bool, email})
  }
  findProducts = async () => {
    let url = 'http://142.93.228.2/server/products';
    try{
        const products = await axios.get(url)
        this.setState({productsList: products.data.myProducts})
        console.log({products})
    }
    catch(error){            
        console.log({error})
    }
}

  findProductsByCategory = async (id) => {
   
    id =  id || this.props.match.params.categoryID;
 
    let url = `http://142.93.228.2/server/products/products_by_category/${id}`;
    try{
        const category = await axios.get(url)
        
        this.setState({productsList: category.data.productsByCategory})
        console.log({category})
    }
    catch(error){
        
        console.log({error})
    }
}
search = async(arg)=>{
  let url = `http://142.93.228.2/server/products/search/${arg}`;
  try{
      const products = await axios.get(url)
      this.setState({productsList: products.data.mySearch})
      console.log({products});
  }
  catch(error){
      debugger
  }
}

  render() {
    let { loggedIn, email } = this.state 
    return (
      <Router>
        <div>
          <Header 
            loggedIn={ loggedIn }
            email ={email}  
            isLoggedIn = {this.isLoggedIn}
          />
          <NavBar
          findProductsByCategory={this.findProductsByCategory}
          findProducts = {this.findProducts}
          search = {this.search}
          />
          <Route exact path = "/sidebar" component = {Sidebar}/>
          <Route exact path = "/" component = {Homepage}/>
          <Route exact path = "/products"
            render = {
              (props)=>(
                  <Products
                    {...props}
                    findProductsByCategory={this.findProductsByCategory}
                    productsList ={this.state.productsList}
                  />
              )
            }
          />
          <Route exact path = "/products/:id" component = {Product}/>
          <Route exact path = '/favorites' component = {Favorites}/>
          <Route exact path = "/shoppingcart"
            render = {
              (props)=>(
                  <ShoppingCart
                    {...props}
                      loggedIn = {loggedIn}
                  />
              )
            }
          />
          <Route exact path = "/register" component = {UserRegisterForm}/>
          <Route exact path = "/thankyou" component ={OrderMsg}/>
          <Route exact path = "/buy" component = {UserBuy}/>
          <Route 
            exact path ="/login"
            render = {
              (props)=>(
                <UserLogin 
                {...props}
                  isLoggedIn = {this.isLoggedIn}
                />
              )
            }
          />
          <Route exact path = "/admin" component = {AdminLogin}/>
          <Route exact path = "/admin/category" component = {AdminCategory}/>
          <Route exact path = "/admin/category/update/:id/:category" component = {AdminUpdCategory}/>
          <Route exact path = "/admin/category/new/:id/:category" component = {AdminNew}/>
          <Route exact path = "/admin/productlist" component = {AdminProductList}/>
          <Route exact path = "/admin/category/product/update/:id" component = {AdminUpdate}/>
          <Route exact path = "/updatedmsg" component = {AdminUpdMsg}/>
          <Route exact path = "/contactus" component = {Contact}/>
          <Route exact path = "/privacy" component = {Privacy}/>
          <Route exact path = "/faq" component = {FAQ}/>
          <Route exact path = "/termsofuse" component = {TermsOfUse}/>
          <Route exact path = "/termsofuse" component = {TermsOfUse}/>
          <Route exact path = "/guestform" component = {GuestBuyForm}/> 
          <Route exact path = "/userslist/" component = {UsersList}/> 
          <Route exact path = "/emailus" component = {EmailFromUser}/> 
          <Route exact path = "/secret" component = {SecretComponent}/> 
          <Route exact path = "/checkout" component = {CheckoutForm}/> 
          <Route exact path = "/userstripebutton" component = {UserStripeButton}/> 
          <Footer/>
        </div>
      </Router>
    );
  }
}


