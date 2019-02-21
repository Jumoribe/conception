import React from 'react';
import {bags} from './Stock'
export default class Bag extends React.Component{
    render(){
        
         return(
        <div style={decor.small}>
            <div style={decor.grid}>
            <div>
                <img src={bags[this.props.match.params.id].img} style={decor.img} alt='image'/>
            </div>
            <div style={decor.product}>
                <div style={decor.title}>{bags[this.props.match.params.id].title}</div>
                <div style={decor.designer}>{bags[this.props.match.params.id].designer}</div>
                <div>{bags[this.props.match.params.id].price}</div>
                <div style={decor.border}>{bags[this.props.match.params.id].description}</div>
                <button onClick={()=> this.props.history.push(`/shoppingcart/${bags[this.props.match.params.id]._id}`)} style={decor.button} className="buttons">Add</button>
            </div>
            
        </div>
        </div>
         )
    }
}
const decor = {
    grid:{
        display:'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    small:{
        width: '70%',
        marginLeft: '9em',
    },
    img:{
        paddingTop: '2em',
        Height: '400px',
        width: '80%'
    },
    product:{
        maxHeight: '400px',
        width: '80%',
        paddingTop: '6em',
        fontFamily:"'EB Garamond', serif"
    },
    border:{
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        padding: '10px auto',
        textAlign: 'justify',
       // text-ustify: inter-word
    },
    title:{
        fontSize: '20px'
    },
    designer:{
        color: 'grey'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '1px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '260px',
        height: '30px',
        outline: 'none',
        marginTop: '2em'
    }
}