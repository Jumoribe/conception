import React from 'react';

export default class Done extends React.Component{
    render(){
        return(
            <span style={{...decor.box, display: this.props.display}}>
                Item Successfully Added!
            </span>
        )
    }
}    

const decor= {
    box:{
        border: '2px solid black',
        backgroundColor: 'black',
        fontSize: '30px',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        padding: '3em',
        margin: 'auto'
    }
}