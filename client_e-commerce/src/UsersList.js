import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
    state = {
        usersList:[]
    }
    componentDidMount(){
        this.findUsers(); 
    }
    findUsers = async () =>{
       let url = 'http://localhost:3001/users'
        try{
            let users = await axios.get(url);
            this.setState({usersList: users.data.myUsers})
            console.log('=================>', this.state.usersList, users)
        }
        catch(error){
            
        }
    }
    render(){
        return(
            <div>
                <div>
                    Users List:
                </div>
                {
                    this.state.usersList.map((ele,i)=>{
                        return ele.name
                    })
                }
            </div>
        )
    }
}

