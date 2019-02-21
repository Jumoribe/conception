import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
export default class AdminCategory extends React.Component{
    state= {
        category:'', categoriesList:[]
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('authToken'))
          if(!token){
              this.props.history.push('/')
          } 
    }
    componentDidMount(){
        this.findCategories();
      }

    findCategories = async()=>{
        let url = 'http://localhost:3001/categories/admin';
        try{
            const categories = await axios.get(url);
            this.setState({categoriesList: categories.data.myCategories})
            console.log(this.state.categoriesList, categories)
        }
        catch(error){
            console.log(error)
            
        }
    }
    handleChange = e=>{
        this.setState({[e.target.name]: e.target.value})
    }

    addCategory = async() => {
        let url = 'http://localhost:3001/categories/admin/new';
        try{
            console.log(this.state.category)
            await axios.post(url,{category:this.state.category});
        }
        catch(error){
            console.log(error)
            
        }
        this.findCategories();
       // this.props.history.push({pathname:'/admin/category/new'})
    }
    gotoForm = async(id, category) =>{
        this.props.history.push({pathname:`/admin/category/new/${id}/${category}`})
    }
    handleDelete = (id) => {
        let url = 'http://localhost:3001/categories/admin/delete';
        try{
            axios.post(url, {_id:id})
            this.findCategories();
        }
        catch(error){
            console.log(error)
            
        }
    }
    render(){
    let {category, categoriesList}=this.state

        return(
            <div style={decor.big}>
            <div style={{...decor.border, ...decor.title}}>
            <p style={decor.add}>Add a new product</p> 
            <p>chose category or create a new one</p>
            </div>
            <div style={{...decor.grid, ...decor.borderTwo}}>
            <div>
              <div style={decor.select}>
                  {
                  
                  categoriesList.map(ele=>{
                      return(
                          <div style={decor.alignItems}>
                          <button style={decor.button} className="buttons" onClick={()=>this.gotoForm(ele._id, ele.category)}>{ele.category}</button>
                          <i className="fas fa-trash" style={decor.icon} onClick={()=>this.handleDelete(ele._id)}></i>
                          <NavLink to={`/admin/category/update/${ele._id}/${ele.category}`}>
                            <i className="fas fa-edit" style={decor.icon}></i>
                          </NavLink>
                          </div>
                      )
                  })     
                }
              </div>  
            </div>
            <div>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new category'
                name= "category"
                value={category}
                />       
                <button 
                onClick={this.addCategory}
                style={{...decor.button, ...decor.addBtn}} className="buttons" >
                Add Category
                </button> 
            </div>   
            </div>
        </div>
        )
    }
}
const decor={
    big:{
        width: '70%',
        margin: 'auto',
        paddingTop: '1em',
        paddingBottom: '2em'
    },
    border:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        padding: '1em',
    },
    borderTwo: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        padding: '1em',
        paddingBottom: '2em',
        marginTop: '1.5em',
        marginBottom: '1.5em'
    },
    select: {
        margin: '1.5em'
    },
    add: {
        fontSize: '30px'
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '20px'
    },
    grid:{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        // margin: 'auto',
        gridGap: '3em'
    },
    input:{
        marginTop: '15px',
        width: '300px',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        borderBottom: '1px solid #ddd',
        fontFamily:"'EB Garamond', serif",
        fontSize: '20px',
        paddingBottom: '0.5em'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '13px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        height: '40px',
        width: '300px',
        outline: 'none',
        fontFamily:"'EB Garamond', serif",
    },
    addBtn: {
        marginTop: '1em'
    },
    icon: {
        border: '1px solid black',
        height: '40px',
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '1em'
    
    },
    alignItems: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '1em'
    },
   
}