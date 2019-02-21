import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Footer extends React.Component{
    render(){
        return(
            <div style={decor.border}>
            <div style={decor.flex} className='footerHover'>
            <NavLink to='/aboutus'>
               <span>About us</span>
            </NavLink>
            <NavLink to='/contactus'>
               <span>Contact us</span>
            </NavLink>
            <NavLink to='/faq'>
               <span>FAQ</span>
            </NavLink>
            </div>
            <span style={decor.social}>
                <a href='https://www.facebook.com'> <i onClick={()=>this.props.history.push({})} className='fab fa-facebook-f'></i></a>
                <a href='https://twitter.com'><i className='fab fa-twitter'></i></a>
                <a href='https://www.pinterest.com'><i className='fab fa-pinterest-p'></i></a>
                <a href='https://www.instagram.com'><i className='fab fa-instagram'></i></a>
            </span>
            <div style={decor.terms}>
                <NavLink to='/privacy'>
                <p>Privacy Police</p> 
                </NavLink>
                <p>||</p>
                <NavLink to='/termsofuse'>
                <p >Terms of Use</p>
                </NavLink>
            </div>
            </div>
        )

    }
}

const decor = {
    border:{
        borderTop: '1px solid rgb(242, 242, 242)',
        marginBottom: '10px',
        marginTop: '50px'
    },
    flex:{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '50%',
        margin: 'auto',
        paddingTop: '2em',
        height: '30px',
        marginTop: '1.5%'
    },
    social:{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '25%',
        margin: 'auto',
        paddingTop: '2em'
    },
    terms:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight:'22px',
        marginTop: '1em',
        fontSize: '10px'
    }
}