import React from 'react';
import axios from 'axios';

export default class SideBar extends React.Component{
    state ={
     categoriesList:[]
    }
    componentDidMount(){
        this.findCategories();
      }

    findCategories = async()=>{
        let url = 'http://142.93.228.2/server/categories/admin';
        try{
            const categories = await axios.get(url);
            this.setState({categoriesList: categories.data.myCategories})
            console.log(this.state.categoriesList, categories)
        }
        catch(error){
            console.log(error)
            debugger
        }
    }
/*     handleMenu =(arg)=>{
        console.log('>>>>>>>>>>>>>>>>>>>>>=======>',this.props)
        this.props.findProductsByCategory(arg);
    } */
    render(){

        return(
            <div style={{display:this.props.display, borderBottom: '2px solid rgb(42, 43, 45)'}}>
                <div>
                {
                this.state.categoriesList.map(ele=>{
                    return(  
                    <p onClick={()=>this.props.findProductsByCategory(ele._id)} className='sidebarItem' style={decor.item}>{ele.category}</p>
                    )
                })
                }
                </div>
            </div>
        )
    }
}

const decor={
    main:{
        width: '100%'
    },
    title:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        fontSize: '20px',
        textAlign: 'right',
        textTransform: 'uppercase',
        margin: '1em auto',
        paddingTop: '1em'
    
    },
    item:{
        borderBottom:'1px solid rgb(242, 242, 242)',
        textAlign: 'right',
        textTransform: 'uppercase', 
        margin: '2em auto', 
        paddingBottom: '0.4em',
        textDecoration: 'none'
    },
    icon:{
        fontSize: '15px',
         color: 'grey',
         paddingRight: '40%'
    }
}