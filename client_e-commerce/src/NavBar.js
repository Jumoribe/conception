import React from 'react';
import {NavLink} from 'react-router-dom'
import Burguer from './Burguer'
import axios from 'axios';

export default class NavBar extends React.Component{
    state = {
        input:'', display:'none'
    }
    handleChange=e=>{
        this.setState({input:e.target.value})
    }
    search=()=>{
    return false
    }
    showBurguer = () =>{
        this.state.display === 'none' ? this.setState({display:'block'}) : this.setState({display:'none'})
        this.state.display === 'block' ? this.setState({display:'none'}) : this.setState({display:'block'})
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
    findProductsByCategory = async (id) => {
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
        <div className='gridNavbar'>
            <div>
                <div onClick={this.showBurguer} className='burguer'><i className="fas fa-bars" style={{color:'white'}}></i>
                    <Burguer
                    showBurguer = {this.showBurguer}
                    findProductsByCategory={this.findProductsByCategory}
                    display={this.state.display}
                    />
                </div>    
            </div>
            <div className='navBar' style={{width: '80%', margin: 'auto', display:'flex', justifyContent: 'space-around'}}>
                <NavLink className ="banana" to={'/aboutus'}>About us</NavLink>
                <NavLink className ="banana" to={'/designers'}>Designers</NavLink>
                <NavLink className ="banana" to={'/products'}>Products</NavLink>
                <NavLink className ="banana" to={'/sale'}>Sale</NavLink>
            </div>
            <div className='find' style={decor.search}>
                <input
                onChange={this.handleChange}
                style={decor.input}
                />
                <div style={decor.find}>
                <i onClick={this.search} className="fas fa-search" style={{color:'white'}}></i>
                </div>
            </div>

        </div>
        )
    }
}

const decor = {
    burguer:{
        marginLeft:'0.4em',
        marginTop:"0.1em",
        fontSize:'25px'
    },
    black:{
        backgroundColor: 'black',
        display: 'grid',
        gridTemplateColumns: '20% 60% 20%',
        height: '38px',
        position: 'sticky',
        top: '0',
        zIndex: '1000'
    },
    flex:{
        display: 'flex',
        justifyContent: 'space-around'
    },
    menu:{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        marginTop:"0.1em",
        color: 'white', 
        fontSize: '20px'
    },
    search:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight:'22px'
    },
    find:{
        marginTop: '10px'
    },
    input:{
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        backgroundColor: 'black',
        marginBottom: '6px',
        outline: 'none',
        width: '150px',
        height: '27px',
        fontSize: '20px',
        color: 'white',
        fontFamily:"'EB Garamond', serif"
    }
}