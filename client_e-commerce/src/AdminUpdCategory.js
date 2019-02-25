import React from 'react';
import axios from 'axios';

export default class AdminUpdCategory extends React.Component{
     state={
         category:'', newCategory:''
     }
     componentWillMount(){
        let token = JSON.parse(localStorage.getItem('authToken'))
          if(!token){
              this.props.history.push('/')
          } 
    }
    
     handleChange=e=>{
         this.setState({[e.target.name]: e.target.value})
     }
     updateCategory= async()=>{
        let url = 'http://142.93.228.2/server/categories/admin/update'
        try{
            await axios.post(url, {newCategory:this.state.newCategory, id:this.props.match.params.id})
            this.props.history.push({pathname:'/admin/category'})
        }
        catch(error){
            
        }
     }
     render(){
         let { newCategory } = this.state
        return(
        <div style={decor.big}>
            <div>
            <p style={{...decor.border, ...decor.title}}>Update a Category</p>
            <div style={{...decor.borderTwo, ...decor.grid}}>
            <div>
                <div>
                <label style={decor.label}>Current category title</label>
                <p style={decor.oldTitle}>{this.props.match.params.category}</p>
                </div>
            </div>
            <div>
                <div>
                <label style={decor.label}>New category title</label>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter new category'
                name="newCategory"
                value={newCategory}
                />
                </div>
            </div> 
            </div>
                <div>       
                    <button 
                    onClick={this.updateCategory}
                    style={decor.button} className="buttons">
                        Submit Changes
                    </button>  
                </div>
            </div>
        </div>
        ) 
    }
}

const decor={
    big:{
        width: '50%',
        margin: 'auto'
    },
    border:{
        borderBottom: '2px solid rgb(42, 43, 45)',

    },
    borderTwo: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingBottom: '2.5em'
    },
    title: {
        fontSize: '30px',
        textAlign: 'center',
        marginTop: '2em',
        paddingBottom: '2em',
        textTransform: 'uppercase'
    },
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '3em'
    },
    label:{
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'left',
        clear: 'left',
        marginLeft: '10%',
        fontSize: '23px',
        fontFamily:"'EB Garamond', serif",
        marginBottom: '1.5em'
    },
    oldTitle: {
        marginLeft: '10%'
    },
    input:{
        width:'270px',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        marginLeft: '10%',
        fontFamily:"'EB Garamond', serif",
        fontSize: '17px',
        marginBottom: '1em'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '13px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '300px',
        height: '30px',
        outline: 'none',
        marginTop: '4em',
        marginLeft: '30%',
        marginBottom: '4em'
    }
}