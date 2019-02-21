import React from 'react';

export default class AdminUpdMsg extends React.Component {
  componentWillMount(){
    let token = JSON.parse(localStorage.getItem('authToken'))
      if(!token){
          this.props.history.push('/')
      } 
}
goShopping = () => {
  this.props.history.push({pathname:'/products'})
}
addNew = () => {
    this.props.history.push({pathname:'/admin/category/new'})
}
goToCat = () => {
    this.props.history.push({pathname:'/admin/category'})
}
render(){
  let item1 =[{title: 'Drawstring Bag', designer:'Chanel', size: 'U', price: '€4000', description: 'Grained Calfskin & Gold-Tone Metal', category: 'bags', color: 'white', image: 'https://www.chanel.com/images/t_fashion/q_auto,f_jpg,fl_lossy,dpr_2/w_1240/drawstring-bag-white-grained-calfskin-gold-tone-metal-grained-calfskin-gold-tone-metal-packshot-default-as0310b0017010601-8812985843742.jpg', sale: false}]

return(
    <div style={decor.small}>
        <p style={{...decor.register, ...decor.border}}>Your item was successfully updated</p>
        <div style={decor.borderItem}>
            {['product','product', 'description', 'color','size','price'].map((ele,i)=>(
            <p style={decor.descriptions}>{ele}</p>
        ))}
    </div>

    <div>
    {
        item1.map(ele=>{
        return( <div style={decor.borderItem}>
            <div style={decor.image}><img style={decor.pic}src={ele.image} alt='pic'/></div> 
            <div style={decor.items}>{ele.title}</div>
            <div style={decor.items}>{ele.description}</div>
            <div style={decor.items}>{ele.color}</div>
            <div style={decor.items}>{ele.size}</div>
            <div style={decor.items}>{ele.price}</div>
            </div>
        )
        })
    } 
  </div> 
  <div style={decor.borderTwo}></div>

  {/* <div>
      <p style={decor.total}>Total: {this.state.total} EUR</p>
  </div> */}

  <div style={decor.grid}>
      <button 
      onClick={this.goShopping}
      style={decor.buttonLeft} className="buttons">Add another product</button>
      <button 
      onClick={this.checkout}
      style={decor.button} className="buttons">Go to another category</button>
  </div>  
  </div>
  )
}
}

const decor = {
  small: {
    width: '80%',
    margin: 'auto'
  },
  register: {
    fontSize: '30px',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  borderItem:{
    display: 'grid',
    gridTemplateColumns: '1.5fr 2fr 2fr 1fr 1fr 1fr',
    borderBottom: '1px solid rgb(242, 242, 242)',
  },  
  descriptions: {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    fontSize: '15px',
    textTransform: 'uppercase',
    paddingTop: '2em',
    marginBottom: '1em'
  },
  border: {
    borderBottom: '2px solid rgb(42, 43, 45)',
    paddingTop: '2em',
    paddingBottom: '2em'
  },
  borderTwo: {
    borderBottom: '2px solid rgb(42, 43, 45)',
    paddingTop: '3em'
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
  icons: {
    fontSize: '12px'
  },
  items:{
    position: 'relative',
    display: 'block',
    margin: 'auto',
    fontSize: '15px'
  },
  quantity: {
    border: '1px solid #ddd',
    fontSize: '16px',
    padding: '4px'
  },
  grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '2em'
  },
  button: {
    backgroundColor: 'rgb(26, 27, 28)',
    color: 'white',
    fontSize: '13px',
    textTransform: 'uppercase',
    border: '2px solid rgb(26, 27, 28)',
    position: 'relative',
    textAlign: 'center',
    width: '220px',
    height: '40px',
    outline: 'none',
    marginTop: '3em',
    marginLeft: 'auto'
},
buttonLeft: {
    backgroundColor: 'rgb(26, 27, 28)',
    color: 'white',
    fontSize: '13px',
    textTransform: 'uppercase',
    border: '2px solid rgb(26, 27, 28)',
    position: 'relative',
    textAlign: 'center',
    width: '220px',
    height: '40px',
    outline: 'none',
    marginTop: '3em',
    marginRight: 'auto'
},
total: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '19px',
    textTransform: 'uppercase',
    fontWeight: 'bold'

}
}