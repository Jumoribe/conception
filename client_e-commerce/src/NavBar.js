import React from 'react';
import {NavLink} from 'react-router-dom'
import Burguer from './Burguer'

export default class NavBar extends React.Component{
    state = {
        input:'', display:'none'
    }
    handleChange=e=>{
        this.setState({input:e.target.value},()=>console.log(this.state.input))
    }
    search= async(arg)=>{
    this.props.findProducts();
    await this.props.search(arg)
    }
    showBurguer = () =>{
        this.state.display === 'none' ? this.setState({display:'block'}) : this.setState({display:'none'})
        this.state.display === 'block' ? this.setState({display:'none'}) : this.setState({display:'block'})
    }
    render(){
        return(
        <div className='gridNavbar'>
            <div>
                <div onClick={this.showBurguer} className='burguer'><i className="fas fa-bars" style={{color:'white'}}></i>
                    <Burguer
                    findProductsByCategory =  {this.props.findProductsByCategory}
                    showBurguer = {this.showBurguer}
                    // findProductsByCategory={this.findProductsByCategory}
                    display={this.state.display}
                    categories={this.props.categories}
                    />
                </div>    
            </div>
            <div className='navBar' style={{width: '80%', margin: 'auto', display:'flex', justifyContent: 'space-around'}}>
                <NavLink className ="banana" to={'/aboutus'}>About us</NavLink>
                <NavLink className ="banana" to={'/designers'}>Designers</NavLink>
                <NavLink className ="banana" to={'/products'} onClick={()=>this.props.findProducts}>Products</NavLink>
                <NavLink className ="banana" to={'/sale'}>Sale</NavLink>
            </div>
            <div className='find' style={decor.search}>
                <input
                onChange={this.handleChange}
                style={decor.input}
                />
                <div style={decor.find}>
                <i onClick={()=>this.search(this.state.input)} className="fas fa-search" style={{color:'white'}}></i>
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