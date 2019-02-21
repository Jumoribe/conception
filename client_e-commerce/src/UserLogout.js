import React from 'react'

export default class UserLogout extends React.Component {
    componentDidMount(){
        
        localStorage.clear()
        //or to remove just one item is will be:
        // localStorage.removeItem('authToken');
        this.props.isLoggedIn(false)
    }
    render(){
        return(
            null
        )
    }
}

//to log out it is just remove the localStorage