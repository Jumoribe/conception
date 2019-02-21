import React from 'react'

export default class SecretComponent extends React.Component {
    state = {
        secret:''
    }
    componentDidMount(){
            let token = localStorage.getItem('authToken');
            fetch('http://localhost:3001/', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:token
                }
            }).then((res)=>{
                res.json().then(({text})=>{
                    this.setState({secret:text})
                })
            }).catch((e)=>{
                
            })
    }
    render(){
            return ( 
               <h1 style={{paddingTop:'100px', textAlign:'center'}}>{this.state.secret}</h1>
            )
    }
}

//here is where the token is sent 