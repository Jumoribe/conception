import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Shoes extends React.Component{
    render(){
        
    return(
    <div style={decor.small}>
        <div style={decor.shoesDisplay}>
        {
        this.props.stock.map((ele, i)=>{
            return(
                <NavLink style={decor.navLink} to={'/shoes/:id'}>
                <div key={i}>
                <div><img alt={ele.title} src={ele.image} style={decor.shoes}/></div>       
                <div style={decor.title}>{ele.title}</div>
                <div style={decor.designer}>{ele.designer}</div>
                <div style={decor.price}>{ele.price}</div>
                </div>
                </NavLink>
            )
        })
        }
        </div>
    </div>
    )
    }
}
const decor = {
    small: {
        marginRight: '15%',
        marginLeft: '15%'
    },
    shoesDisplay:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1em'
        // imageHeight: ‘20px’,
        // imageWidth: ‘30px’
    },
    shoes:{
        height: '100%',
        width: '100%'
    },
    navLink:{
        textDecoration: 'none'
    },
    title:{
        position: 'relative',
        textAlign:'center',
        textTransform: 'uppercase',
        color: 'black'
    },
    designer:{
        position: 'relative',
        textAlign:'center',
        color: 'grey'
    },
    price:{
        position: 'relative',
        textAlign:'center',
        color: 'black',
        fontSize: '13px'
    }
 }

// const decor = {
//     grid:{
//     display:'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gridGap: '3em',
//     width: '80%',
//     margin: 'auto'
//     },
//     small:{
//     marginTop:'4em'
//     },
//     img:{
//         width: '80%',
//         margin: 'auto'
//     },
//     name:{
//     position: 'relative',
//     textAlign:'center',
//     },
//     brand:{
//     position: 'relative',
//     textAlign:'center',
//     },
//     price:{
//     position: 'relative',
//     textAlign:'center',
//     }
// }