import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    logOut = () => {
        localStorage.clear()
        this.props.isLoggedIn(false)
    }
    render(){
        
            if(this.props.loggedIn){
                return (
                <div className='container'>
                    <div style={decor.spans}>
                        <span style={decor.padding}>{localStorage.getItem('email')}</span>
                        <span onClick={this.logOut} style={decor.padding}> ||  LogOut</span>
                        <NavLink to='/favorites'><span style={decor.padding}><i className="far fa-star"></i></span></NavLink>
                        <NavLink to='/shoppingcart'><span><i className="fas fa-shopping-bag"></i>&nbsp;Bag</span></NavLink>
                    </div>
                    <div style={decor.box}>
                    <NavLink to='/'><h1 className='logo'>CONCEPTION</h1></NavLink> 
                    </div>
                </div>
                )
            }else{
                return (
                    <div className='container'>
                    <div style={decor.spans}>
                        <NavLink to='/login'><span style={decor.padding}>Login</span></NavLink>
                        <NavLink to='/favorites'><span style={decor.padding}><i className="far fa-star"></i></span></NavLink>
                        <NavLink to='/shoppingcart'><span><i className="fas fa-shopping-bag"></i>&nbsp;Bag</span></NavLink>
                    </div>
                    <div style={decor.box}>
                    <NavLink to='/'><h1 className='logo'>CONCEPTION</h1></NavLink> 
                    </div>
                </div>
                )
            }
    }
}

const decor = {
    container:{
        height: '150px',
    },
    logo:{
        fontFamily:"'EB Garamond', serif",
        fontSize:'4em',
        marginTop:'1%'
    },
    box:{
        display: 'flex',
        justifyContent: 'center'
    },
    header:{
       width: '500px',
       height: '150px',
    },
    padding:{
        paddingRight: '1em'
    },
    spans: {
        position: 'relative',
        paddingRight: '0.5em',
        paddingTop: '1%',
      marginRight: '1%',
      textAlign: 'right'
    },
    fav:{
        border: '0.5px'
    }
}