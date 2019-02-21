import React from 'react';
import {NavLink} from 'react-router-dom'
export default class Contact extends React.Component{

    render(){


        return(
            <div style={decor.big}>
            <p style={decor.title}>Contact Us</p> 
            <div style={decor.grid}>
            <div>
                <p>Adress</p>
                <p>Phone</p>
                <NavLink to={'/emailus'}>
                <p>e-mail</p>
                </NavLink>
            </div>
            <div>
                <p>Street....</p>
                <p>+34 7325743482</p>
                <p>contact@conception.com</p>
            </div>
        </div>
        <div style={decor.border}></div>
        </div>
        )
    }
}
const decor={
    big:{
        width: '70%',
        margin: 'auto',
        paddingTop: '1em',
        paddingBottom: '2em'
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '20px',
        borderBottom: '2px solid rgb(42, 43, 45)',
        padding: '1em',
    },
    grid:{
        width: '40%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '3em',
        textAlign: 'center',
        paddingBottom: '3em',
        fontSize: '20px'
    },
    border:{
        borderBottom: '2px solid rgb(42, 43, 45)',
    }
}