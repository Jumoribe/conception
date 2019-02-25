import React from 'react';

export default class UserLogin extends React.Component{
    state= {
        password:'', email:''
    }
    handleChange = e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    login = (e) =>{
        let { email , password } = this.state
        //post request
        fetch('http://142.93.228.2/server/users/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                  
                  if(responseJson.admin === true){
                    localStorage.setItem('authToken',JSON.stringify(responseJson.token))
                    localStorage.setItem('email', responseJson.email);
                    alert('Welcome back '+ responseJson.email)
                    this.props.isLoggedIn(true, responseJson.email)
                    this.props.history.push({pathname:'/admin/category'})
                  }else{
                    if(responseJson.success){
                    localStorage.setItem('authToken',JSON.stringify(responseJson.token))
                    localStorage.setItem('email', responseJson.email);
                    alert('Welcome back '+ responseJson.email)
                    this.props.isLoggedIn(true, responseJson.email)
                    this.props.history.push({pathname:'/'})
                    } else {
                        alert('username not found')
                    }
                  }
        }).catch((e)=>{
            
        })
    }
    goToRegister = () =>{
        this.props.history.push({pathname:"/register"})
    }
    render(){
    let { email, password }=this.state
        return(
            <div style={decor.big}>
            <h2 style={decor.title}>Our comunity</h2>
            <div style={decor.grid}>
            <div>
                <div>
                    <p style={decor.intro}>Do you already have an account?</p>
                    <p>Please enter your e-mail address and password to identify yourself.</p>
                    {/* <label style={decor.label}>Username</label> */}
                    <input style={decor.username}
                    onChange = {this.handleChange}
                    placeholder ='enter e-mail'
                    name= "email"
                    value={email}
                    />
                </div>
                <div> 
                    {/* <label style={decor.label}>Password</label> */}
                    <input style={decor.password}
                    onChange = {this.handleChange}
                    placeholder ='enter password'
                    name="password"
                    value={password}
                    type='password'
                    />
                    <p style={decor.forgotten}>Have you forgotten your password?</p>  
                </div> 
                <div>       
                    <button 
                    onClick={this.login}
                    style={decor.button} className='buttons'>Log in</button>  
                </div>   
            </div>
            <div>
                <div>
                    <p style={decor.intro}>If you still don't have a CONCEPTION account, use this option to access the registration form.</p>
                    <p style={decor.regis}>By giving us your details, purchasing in BLANCHETTE will be faster and an enjoyable experience.</p>
                    <button 
                    onClick={this.goToRegister}
                    style={decor.button} className='buttons'>Create Account</button>

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
        margin: 'auto',
        paddingTop: '4em',
        paddingBottom: '5em'
    },
    title: {
        fontSize: '30px',
        fontFamily:"'EB Garamond', serif",
        textTransform: 'uppercase',
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingBottom: '70px',
        textAlign: 'center'
    },
    // label:{
    //     marginTop: '1em',
    //     display: 'flex',
    //     justifyContent: 'left',
    //     clear: 'left',
    //     fontSize: '23px',
    //     fontFamily:"'EB Garamond', serif",
    // },
    intro: {
        fontFamily:"'EB Garamond', serif",
        fontSize: '25px',
        fontWeight: '500'
    },
    regis: {
        fontSize: '20px'
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
    username:{
        width:'100%',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
        fontSize: '18px',
        padding: '2px',
        marginBottom: '1em',
        marginTop: '1em'
    },
    password:{
        width:'100%',
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
        fontSize: '18px',
        padding: '2px',
        marginBottom: '2em',
        marginTop: '1em'
    },
    forgotten: {
        fontFamily:"'EB Garamond', serif", 
        fontSize: '13px',
        textDecoration: 'underline'
    },
    button:{
            backgroundColor: 'rgb(26, 27, 28)',
            color: 'white',
            fontSize: '15px',
            textTransform: 'uppercase',
            border: '2px solid rgb(26, 27, 28)',
            position: 'relative',
            textAlign: 'center',
            width: '300px',
            height: '40px',
            outline: 'none',
            marginTop: '2em'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '5em',
    }
}




