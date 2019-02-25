import React from 'react';
import axios from 'axios';
import Done from './Done';

export default class AdminNew extends React.Component{
    state={
        title:'', designer:'', price:'', description:'', color:'',category:'', img:'', stock:'', productsList:[], display:'none'
    }
    //sale should be set to false and then we change or empty?
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('authToken'))
          if(!token){
              this.props.history.push('/')
          } 
    }
    handleChange=e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    componentDidMount = () => {
        this.findProducts();
        this.addProduct();
    }
    findProducts = async()=>{
        let url = 'http://142.93.228.2/server/products/';
        try{
            const products = await axios.get(url);
            this.setState({productsList: products.data.myProducts})
            console.log(this.state.productsList, products)
        }
        catch(error){
            console.log(error)
            
        }
    }
    addProduct= async( )=>{
        let {title, designer, price, description, category, color, img, stock} = this.state
        let url = 'http://142.93.228.2/server/products/new'
        try{
            await axios.post(url, {
                title: title, 
                designer: designer, 
                price: price,
                description: description, 
                categTitle: category,
                color: color,   
                img: img,
                categoryID:this.props.match.params.id,
                stock: stock
            })
            this.setState({display:'block'});   
            setTimeout(()=>{
                this.setState({display:'none'})   
            },1000)
            this.setState({title:'', designer:'', price:'', description:'', color:'',category:'', img:'', stock:''})
        }
        catch(error){
            
        }
        this.findProducts();
    }
    render(){
        let {title, designer, price, description, color, img, stock }=this.state
        return(
        <div style={decor.big}>
            <div style={decor.border}>
            <h2 style={{...decor.border, ...decor.title}}>Add new product</h2>
            <p style={decor.categTitle}>Category:{this.props.match.params.category} </p>
            <p>CategoryID: {this.props.match.params.id}</p>
            <div>
                <label style={decor.label}>Title</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter title'
                name="title"
                value={title}
                />
            </div>
            <div> 
                <label style={decor.label}>Description</label>
                <textarea style={decor.textarea}
                onChange = {this.handleChange}
                placeholder ='enter description'
                name="description"
                value={description}
                />  
            </div> 
            <div>
                <label style={decor.label}>Designer</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter designer'
                name="designer"
                value={designer}
                /> 
            </div>
            <div>
                <label style={decor.label}>Price</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter price'
                name="price"
                value={price}
                />   
            </div>
            <Done display={this.state.display}/>
            <div>         
                <label style={decor.label}>Color</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter color'
                name="color"
                value={color}
                /> 
            </div> 
            <div>
                <label style={decor.label}>Upload Image</label>         
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='add img url'
                name="img"
                value={img}
                />  
            </div>
            <div> 
                <label style={decor.label}>Stock</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter stock'
                name="stock"
                value={stock}
                />  
            </div> 
            {/* <div>
                <label style={decor.label}>Status</label>                
                <select onChange = {this.handleChange} style={decor.select} value={sale}>
                    <option name='sale' value='true'>on sale</option>
                    <option name='sale' value='false'>regular price</option>
                </select>  
            </div> */}
            </div>
            <div>       
                <button 
                onClick={this.addProduct}
                style={decor.button} className='buttons'
                >
                Submit
                </button>  
            </div> 
        </div>
        ) 
    }
}

const decor={
    big:{
        width: '40%',
        margin: 'auto',
        paddingTop: '3em',
    },
    border:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        margin: 'auto',
        paddingBottom: '35px',
        textAlign: 'center'
    },
    title: {
        textTransform: 'uppercase',
        marginTop: '1em'
    },
    label:{
        marginTop: '1em',
        display: 'inline-block',
        width:'130px',
        textAlign: 'left',
        fontSize: '23px',
        fontFamily:"'EB Garamond', serif",
    },
    select:{
        width:'423px',
        border: '1px solid #cbcbcb',
        height: '24px',
        outline: 'none',
        background: 'white',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
        fontSize: '17px',
        marginLeft: '1em',

    },
    textarea:{
        width:'423px',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
        fontSize: '17px',
        marginLeft: '1em'
    },
    input:{
        width:'423px',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
        fontSize: '17px',
        marginLeft: '1em'
    },
    button:{
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
        marginLeft: '36%',
        fontFamily:"'EB Garamond', serif"
    },
    categTitle: {
        marginTop: '2em',
        display: 'inline-block',
        width:'130px',
        textAlign: 'left',
        fontSize: '23px',
        fontFamily:"'EB Garamond', serif",
    }
}