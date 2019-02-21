import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import SideBar from './SideBar';
import Designers from './Designers';

export default class Products extends React.Component{
    state ={
        display:'block', productsList:[], displaydesigners:'block', designersList:[]
    }
    goTop=()=>{
        window.scrollTo(0,0);
    }
    showSideBar = () =>{
        this.state.display === 'block' ? this.setState({display:'none'}) : this.setState({display:'block'})
        this.state.display === 'none' ? this.setState({display:'block'}) : this.setState({display:'none'})
    }
    componentDidMount () {
        this.findProducts();
    }
    findProducts = async () => {
        let url = 'http://localhost:3001/products';
        try{
            const products = await axios.get(url)
            this.setState({productsList: products.data.myProducts})
            console.log({products})
        }
        catch(error){
            
            console.log({error})
        }
    }
    findProductsByCategory = async (id) => {
        id =  id || this.props.match.params.categoryID;
        let url = `http://localhost:3001/products/products_by_category/${id}`;
        try{
            const category = await axios.get(url)
            
            this.setState({productsList: category.data.productsByCategory})
            console.log({category})
        }
        catch(error){
            
            console.log({error})
        }
    }

    showDesigners = () =>{
        this.state.displaydesigners === 'block' ? this.setState({displaydesigners:'none'}) : this.setState({displaydesigners:'block'})
        this.state.displaydesigners === 'none' ? this.setState({displaydesigners:'block'}) : this.setState({displaydesigners:'none'})
    }

    findproductsByDesigners= async (kiwi) => {
        let url = `http://localhost:3001/products/products_by_desinger`;
        try{
            const designers = await axios.get(url)
            
            this.setState({designersList: designers.data.productsByDesigner})
            console.log({designers})
        }
        catch(error){
            
            console.log({error})
        }
    }
    render(){
         return(
             <div>
             <div className='grid'>
                <div className='sideBar'>
                    <p style={decor.filter}>PRODUCTS</p>
                <p 
                onClick={this.showSideBar}
                style={decor.category}>
                    Categories
                </p>
                    <SideBar 
                    findProductsByCategory={this.findProductsByCategory}
                    showSideBar={this.showSideBar}
                    display={this.state.display}
                    />
                {/* <p onClick={this.showDesigners} style={decor.category}>Designer</p>
                <Designers
                findproductsByDesigners={this.findproductsByDesigners}
                designersList = {this.state.designersList}
                />
                <p style={decor.category}>Size</p>
                <p style={decor.category}>Color</p>   */}
                </div>
             <div style={decor.small}>
                 <div className='bagsDisplay'>
                 {
                    this.state.productsList.map ((ele, i) => { 
                         if(true){
                             if(i  < 9){
                                return(
                                    <NavLink style={decor.link} to={`/products/${ele._id}`}>
                                    <div key={i}>
                                    <div style={decor.height} className='imgHover'><img src={ele.img} style={decor.bagsPic} alt={ele.title}/></div>
                                    <div style={decor.title}>{ele.title}</div>
                                    <div style={decor.designer}>{ele.designer}</div>
                                    <div style={decor.price}>{ele.price}</div>
                                    </div>
                                    </NavLink>
                                )
                             }
                         }
                         return false
                     })
                 }
                 </div>
                 </div>
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
    grid:{
        display:'grid',
        gridTemplateColumns:'15% 85%'
     },
     category:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        fontSize: '20px',
        textAlign: 'right',
        textTransform: 'uppercase',
        margin: '1em auto',
     },
     filter:{
        fontSize: '25px',
        position: 'relative',
        textAlign: 'right',
     },
     menu:{
        color: 'black',
        fontSize:'30px',
    },
     products:{
        textTransform: 'uppercase',
        fontSize: '20px'
     },
     small: {
         widt:'70%',
         margin: 'auto',
         //marginTop: '3em'
     },
     height:{
        height:'300px',         
        position: 'relative',
        itemAlign: 'center',
        margin: 'auto'
     },
     bagsDisplay:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2em'
     },
     bagsPic:{
        display: 'flex',
        margin: 'auto',
         maxWidth: '100%',
         maxHeight: '100%',
         borderBottom: '2px solid white',
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
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '20px',
        paddingLeft: '20px',
        outline: 'none',
        display: 'flex',
        margin: 'auto'
    },
    arrow: {
        imgSize: '50%'
    },
    arrowContainer: {
        position: 'fixed',
        bottom: '200px',
        right: '50px',
        //display: 'flex',
        //justifyContent:'flex-end',
        // marginRight:'2em',
        // marginTop: '1em',
        fontSize: '30px'
    },
 }

