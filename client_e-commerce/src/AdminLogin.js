import React from 'react';

export default class AdminLogin extends React.Component{
    state= {
        email:'', password:''
    }
    handleChange = e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    login = () =>{
        if (true){
            this.props.history.push({pathname:"/admin/category"})
        }
    }
    render(){
    let {email, password}=this.state
        return(
            <div style={decor.big}>
            <h2 style={decor.border}>ADMIN LOGIN</h2>
            <div>
                <input style={decor.input}
                onChange = {this.handleChange}
                placeholder ='enter email'
                name= "email"
                value={email}
                />
            </div>
            <div> 
                <input style={decor.input}
                onChange = {this.handleChange}
                type = 'password'
                placeholder ='password'
                name="password"
                value={password}
                />  
            </div> 
            <div>       
            <button 
            onClick={this.login}
            className='buttons' style={decor.button}>Login</button>
            </div>   
        </div>
        )
    }
}
const decor={
    big:{
        width: '20%',
        margin: 'auto',
        paddingTop: '5em',
        paddingBottom: '7em'
    },
    border:{
        borderBottom: '2px solid rgb(42, 43, 45)',
        margin: 'auto',
        textAlign: 'center'
    },
    input:{
        width:'288px',
        display: 'flex',
        justifyContent: 'center',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        marginTop: '2em',
        fontFamily:"'EB Garamond', serif",
        fontSize: '18px'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '1px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '20px',
        paddingLeft: '20px',
        outline: 'none',
        marginTop: '10%',
        marginLeft: '36%',
      }
}