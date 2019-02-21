import React from 'react';
import {NavLink} from 'react-router-dom'
import {bags} from './Stock'
export default class Bags extends React.Component{
    goTop=()=>{
        window.scrollTo(0,0);
    }
    render(){
         return(
             <div style={decor.small}>
                 <div style={decor.bagsDisplay}>
                 {
                     bags.map ((ele, i) => { //the props come from myrouter.js
                         return(
                             <NavLink style={decor.link} to='/bags/:id'>
                             <div key={i}>
                             <div style={decor.height} className='imgHover'><img src={ele.image} style={decor.bagsPic} alt={ele.title}/></div>
                             <div style={decor.title}>{ele.title}</div>
                             <div style={decor.designer}>{ele.designer}</div>
                             <div style={decor.price}>{ele.price}</div>
                             </div>
                             </NavLink>
                         )
                     })
                 }
                 </div>
                 <button className='buttons' style={decor.viewMoreBtn}>View more</button>
                 <div style={decor.arrowContainer}>
                    <i className="fas fa-chevron-up" style={decor.arrow} onClick={this.goTop}></i>
                 </div>
             </div>
        )
     }
 }

 const decor = {
     small: {
         marginRight: '15%',
         marginLeft: '15%',
         marginTop: '3em'
     },
     height:{
         height:'40vh'
     },
     bagsDisplay:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2em'
     },
     bagsPic:{
         maxWidth: '100%',
         maxHeight: '100%',
         borderBottom: '2px solid white',
         position: 'relative',
         display: 'block',
         margin: '0 auto'
     },
     title:{
         textTransform: 'uppercase',
         position: 'relative',
         textAlign: 'center',
         color: 'black'
     },
     designer: {
         color: 'rgb(187, 192, 201)',
         position: 'relative',
         textAlign: 'center'
     },
     price:{
         position: 'relative',
         textAlign: 'center',
         color: 'black'
     },
     link:{
         textDecoration: 'none'
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
        marginTop: '10%',
        marginLeft: '46%',
    },
    arrow: {
        imgSize: '50%'
    },
    arrowContainer: {
        display: 'flex',
        //position: 'fixed',
        justifyContent:'flex-end',
        marginRight:'2em',
        marginTop: '1em',
        fontSize: '30px'
    },
 }