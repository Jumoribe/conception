import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Homepage extends React.Component{
    handleShopNow = ()=>{
        this.props.history.push({pathname:"/products"})
    }
    render(){
    return(
        <div>
            <img style={decor.mainpic} src='https://res.cloudinary.com/dyuu7x24r/image/upload/v1549900826/BlanchetteProject/header.webp' alt='mainpicture'/>
            <section style={decor.white}>
                <p style={decor.title}>CHANEL FOR CONCEPTION</p>
                <p style={decor.p}>DISCOVER THE NEW COLLECTION MADE OF A COLLABORATION BETWEEN CONCEPTION AND THE CHANEL. THE NEW SPECIAL COLLECTION IS OFFICIALLY AVAILABLE.</p>
                <button 
                onClick={this.handleShopNow}
                className='buttonswhite' style={decor.button}>Shop now</button>
            </section>
            <div style={decor.grid}>
                <NavLink to='/products/hats'>
                <img className='category' style={decor.mainpic} src='https://res.cloudinary.com/dyuu7x24r/image/upload/v1549903031/BlanchetteProject/hat.jpg' alt='hat'/></NavLink>
                <NavLink to='/category/bags'>
                <img className='category'  style={decor.mainpic} src='https://res.cloudinary.com/dyuu7x24r/image/upload/v1549902744/BlanchetteProject/bag.jpg' alt='hat'/></NavLink>
                <NavLink to='/categorys/belts'>
                <img className='category'  style={decor.mainpic} src='https://res.cloudinary.com/dyuu7x24r/image/upload/v1549902735/BlanchetteProject/belt.jpg' alt='hat'/></NavLink>
            </div>
                <p style={decor.p2}>SPRING 2019 COLLECTION READY-TO-WEAR</p>
                <p style={decor.title}>CHANEL</p>
            <div style={decor.column}>
                <NavLink to='/chanel'>
                <div><img className='category' style={decor.pic} src='https://res.cloudinary.com/dyuu7x24r/image/upload/v1549911799/BlanchetteProject/chanel2.webp' alt='hat'/></div></NavLink>
                <NavLink to='/chanel'>
                <div><img className='category' style={decor.pic} src='https://res.cloudinary.com/dyuu7x24r/image/upload/v1549912311/BlanchetteProject/Screen_Shot_2019-02-11_at_20.11.18.png' alt='hat'/></div></NavLink>
            </div>
        </div>
    )
}
}

const decor={
    mainpic:{
        width:'100%',
        marginTop: '0%'
    },
    grid:{
        width: '95%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '2em',
    },
    pic:{
        height: '100%',
        width:'100%'
    },
    column:{
        width: '95%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '2.11fr 1.02fr',
        gridGap: '2em',
        marginTop: '2em'
    },
    white:{
        height: '400px',
        textAlign: 'center',
        paddingTop: '7%',
        borderBottom: '1px solid rgb(242, 242, 242)'
    },
    title:{
        fontSize: '30px',
        textAlign: 'center',
    },
    p:{
        color: 'grey',
        marginTop: '3em',
        paddingBottom: '3em',
        textAlign: 'center',
    },
    p2:{
        color: 'grey',
        paddingTop: '5em',
        textAlign: 'center',
        borderTop: '1px solid rgb(242, 242, 242)'
    },
    button:{
        backgroundColor: 'white',
        color: 'black',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '1px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '260px',
        height: '40px',
        outline: 'none',
        marginTop: '2em'
    }
}