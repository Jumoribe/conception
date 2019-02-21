import React from 'react';
import axios from 'axios';

export default class AdminUpdate extends React.Component{
    state={
        sale:'' , 
        _id: "",
         title: "", 
         designer: "", 
         price: "", 
         color:'', 
         img:'', 
         description:'',
         stock:'', newStock:'',
        newTitle:'', newDesigner:'', newPrice:'', newDescription:'', newCategoryID:'', newColor:'', newImg:'', saleDiscount:''
    }
    componentDidMount(){
        this.findProduct()
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('authToken'))
          if(!token){
              this.props.history.push('/')
          } 
    }
    findProduct = async () => {
        
        let url = `http://localhost:3001/products/product/${this.props.match.params.id}`;
        try{
            const product = await axios.get(url)
            
            this.setState({sale:product.data.myProduct.sale , _id:product.data.myProduct._id, title:product.data.myProduct.title, designer:product.data.myProduct.designer, price:product.data.myProduct.price, color:product.data.myProduct.color, img:product.data.myProduct.img, description:product.data.myProduct.description, stock: product.data.myProduct.stock})
            console.log({product})
        }
        catch(error){
            
            console.log({error})
        }
    }
    handleChange=e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    updateProduct=()=>{
        let url = 'http://localhost:3001/products/update'
        let {newStock, newTitle, newDesigner, newPrice, newDescription, newCategoryID, newColor, newImg}=this.state
        try{
            axios.post(url, {id:this.props.match.params.id, newTitle:newTitle, newDesigner:newDesigner, newPrice:newPrice, newDescription:newDescription, categoryID:newCategoryID, newColor:newColor, newImg: newImg, newStock: newStock})
        }
        catch(error){
            
        }
        this.props.history.push({pathname:"/admin/productlist"})
    }
    render(){
        let { sale, saleDiscount, title, designer, price, color, img, description, stock, newTitle, newDesigner, newPrice, newDescription,  newColor, newStock, newImg}=this.state
        return(
        <div style={decor.big}>
            <div>
            <h2 style={decor.border}>Update a Product</h2>
            <div style={decor.grid}>
            <div>
                <div>
                <label style={decor.label}>Title</label>
                <p>{title}</p>
                </div>
                <div> 
                <label style={decor.label}>Description</label>
                <p>{description}</p>  
                </div> 
                <div>
                <label style={decor.label}>Designer</label>
                <p>{designer}</p>
                </div>
                <div>
                <label style={decor.label}>Price</label>
                <p>{price}</p> 
                </div>
                <div>         
                <label style={decor.label}>Color</label>
                <p>{color}</p>
                </div> 
                <div>
                <label style={decor.label}>Image URL</label>         
                <p>{img}</p>
                </div>
                <div>
                <label style={decor.label}>Stock</label>                
                <p>{stock}</p> 
                </div>
                <div>
                <label style={decor.label}>Sale</label>                
                <p>{sale}</p> 
                </div>
                <div>
                <label style={decor.label}>Discount</label>                
                <p>{saleDiscount}</p> 
                </div>
            </div>
            <div>
                <div>
                <label style={decor.label}>Title</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new title'
                name="newTitle"
                value={newTitle}
                />
                </div>
                <div> 
                <label style={decor.label}>Description</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new description'
                name="newDescription"
                value={newDescription}
                />  
                </div> 
                <div>
                <label style={decor.label}>Designer</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new designer'
                name="newDesigner"
                value={newDesigner}
                /> 
                </div>
                <div>
                <label style={decor.label}>Price</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new price'
                name="newPrice"
                value={newPrice}
                />   
                </div>
                <div>         
                <label style={decor.label}>Color</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new color'
                name="newColor"
                value={newColor}
                /> 
                </div> 
                <div>
                <label style={decor.label}>Upload Image</label>         
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='add new img url'
                name="newImg"
                value={newImg}
                />  
                </div>
                <div>
                <label style={decor.label}>Stock</label>         
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='add new stock'
                name="newStock"
                value={newStock}
                />  
                </div>
                <div>
                <label style={decor.label}>Sale</label>                
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='true or false?'
                name="sale"
                value={sale}
                /> 
                </div>                
                <div>         
                <label style={decor.label}>Discount</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new color'
                name="saleDiscount"
                value={saleDiscount}
                /> 
                </div> 
                <div>       
                <button 
                onClick={this.updateProduct}
                style={decor.button}
                className='buttons'>
                Submit Changes
                </button>  
                </div>    
            </div>
            </div>
            </div>
        </div>
        ) 
    }
}

const decor={
    big:{
        width: '70%',
        margin: 'auto'
    },
    border:{
        borderBottom: '2px solid rgb(42, 43, 45)'
    },
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    label:{
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'left',
        clear: 'left',
        fontSize: '23px',
        fontFamily:"'EB Garamond', serif",
    },
    select:{
        width:'400px',
        border: '1px solid #cbcbcb',
        height: '24px',
        outline: 'none',
        background: 'white',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
    },
    input:{
        width:'360px',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif"
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
        marginRight: 'auto',

        // backgroundColor: 'rgb(26, 27, 28)',
        // color: 'white',
        // fontSize: '19px',
        // textTransform: 'uppercase',
        // border: '2px solid rgb(26, 27, 28)',
        // marginTop: '2em',
        // marginBotton: '2em',
        // padding: '2 em',
        // display: 'flex',
        // float: 'left',
        // fontFamily:"'EB Garamond', serif",
        // outline: 'none',
    }
}