import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import SideBar from './SideBar';

export default class ProductsByCategory extends React.Component{
    state ={
        display:'block', productsList:[],
    }
    goTop=()=>{
        window.scrollTo(0,0);
    }
    showSideBar = () =>{
        this.state.display === 'block' ? this.setState({display:'none'}) : this.setState({display:'block'})
        this.state.display === 'none' ? this.setState({display:'block'}) : this.setState({display:'none'})
    }
    componentDidMount () {
        
        this.findProductsByCategory();
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
    render(){
         return(
             <div style={decor.grid}>
                <div>
                    <p style={decor.filter}>FILTER BY</p>
                    <i 
                    onClick={this.showSideBar}
                    style={decor.menu} className="fas fa-chevron-circle-down"></i>
                    <SideBar 
                    findProductsByCategory={this.findProductsByCategory}
                    hideSideBar={this.hideSideBar}
                    showSideBar={this.showSideBar}
                    display={this.state.display}
                    />
                </div>
             <div style={decor.small}>
                 <div style={decor.bagsDisplay}>
                 {
                    this.state.productsList.map ((ele, i) => { 
                         if(true){
                             if(i  < 6){
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
                 <button className='buttons' style={decor.viewMoreBtn}>View more</button>
                 <div style={decor.arrowContainer}>
                    <i className="fas fa-chevron-up" style={decor.arrow} onClick={this.goTop}></i>
                 </div>
             </div>
             </div>
        )
     }
 }

 const decor = {
     filter:{
        fontSize: '25px',
        marginLeft: '1em' 
     },
     menu:{
        color: 'black',
        fontSize:'30px',
    },
     products:{
        textTransform: 'uppercase',
        fontSize: '20px'
     },
     grid:{
        display:'grid',
        gridTemplateColumns:'15% 85%'
     },
     small: {
         widt:'70%',
         marginTop: '3em'
     },
     height:{
        height:'300px'
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
         itemAlign: 'center',
        //  display: 'block',
        margin: 'auto'
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
