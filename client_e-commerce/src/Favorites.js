import React from 'react';

export default class Favorites extends React.Component {
state = {total:'7500,00'}
goShopping = () =>{
        this.props.history.push({pathname:"/products"})
}
goBag = () =>{
    if (true){
        this.props.history.push({pathname:"/shoppingcart"})
    }
}
addProductInBag = ()=>{
    return false
}
deleteOfFavorites=()=>{
    return false
}
render(){
    let item1 =[{title: 'Drawstring Bag', designer:'Chanel', size: 'U', price: '€4000', description: 'Grained Calfskin & Gold-Tone Metal', category: 'bags', color: 'white', image: 'https://www.chanel.com/images/t_fashion/q_auto,f_jpg,fl_lossy,dpr_2/w_1240/drawstring-bag-white-grained-calfskin-gold-tone-metal-grained-calfskin-gold-tone-metal-packshot-default-as0310b0017010601-8812985843742.jpg', sale: false},
    {title: 'Flap Bag', designer:'Chanel', size:'U', price: '€3500', description: 'Lambskin & Gold-Tone Metal', category: 'bags', color: 'white', image: 'https://www.chanel.com/images/t_fashion/q_auto,f_jpg,fl_lossy,dpr_2/w_1920/flap-bag-white-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-as0321b0012010601-8811046043678.jpg', sale: false},
];
return(
    <div style={decor.small}>
    <p style={{...decor.register, ...decor.border}}> My wish list</p>
    <div style={decor.borderItem}>
    {['product','description','size','color','amount', 'add in bag','delete',].map((ele,i)=>(
        <p style={decor.descriptions}>{ele} </p>
    ))}
        </div>
    <div>
    {
        item1.map(ele=>{
            return( 
                <div style={decor.borderItem}>
                    <div style={decor.image}><img style={decor.pic}src={ele.image} alt='pic'/></div> 
                    <div style={decor.items}>{ele.description}</div>
                    <div style={decor.items}>{ele.size}</div>
                    <div style={decor.items}>{ele.color}</div>
                    <div style={decor.items}>{ele.price}</div>
                    <div style={decor.trash}><i onClick={this.addProductInBag} class="fas fa-shopping-bag"></i></div>
                    <div style={decor.trash}><i onClick={this.deleteOfFavorites} class="fas fa-trash"></i></div>
                </div>
            )
        })
    }  
    </div>  
    <div style={decor.border2}></div>
    <div style={decor.grid}>
        <button 
        onClick={this.goShopping}
        className='buttons' style={decor.buttonLeft}>Continue Shopping</button>  
        <button 
        onClick={this.goBag}
        className='buttons' style={decor.button}>Go to Bag</button>
    </div>  
    </div>
    )
}
}

const decor = {
    small: {
        width: '70%',
        margin: 'auto'
    },
    register: {
        fontSize: '30px',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    borderItem:{
        display: 'grid',
        gridTemplateColumns: '1.5fr 2fr 0.8fr 1fr 1fr 1fr 1fr',
        borderBottom: '1px solid rgb(242, 242, 242)',
    },    
    border: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingTop: '2em',
        paddingBottom: '1em'
    },
    image:{
        height:'15vh',
        position: 'relative',
        display: 'block',
        margin: '15px auto'
    },
    pic:{
        maxWidth: '100px',
        maxHeight: '100px',
    },
    trash:{
        fontSize:'15px',
        position: 'relative',
        display: 'block',
        margin: 'auto'
    },
    descriptions:{
        position: 'relative',
        display: 'block',
        margin: 'auto',
        fontSize: '15px',
        textTransform: 'uppercase',
        paddingTop: '2em',
        marginBottom: '1em'
    },
    items:{
        position: 'relative',
        display: 'block',
        margin: 'auto'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '220px',
        height: '40px',
        outline: 'none',
        marginTop: '2em',
        marginLeft: 'auto',
    },
    buttonLeft:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '220px',
        height: '40px',
        outline: 'none',
        marginTop: '2em',
        marginRight: 'auto',
    },
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    border2:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingTop: '2em' 
    },
    icons:{
        fontSize: '12px'
    },
}