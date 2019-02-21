import React from 'react';

export default class UserRegisterForm extends React.Component {
    state = {
        passwordConfimation:'', password:'', name: '', surname:'', email: '', phone:'', address: '', optionalInformation:'', postcode:'', town:'', province:'', country:''
    }

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    addRegister = async () => {
        let { name, surname, email, phone, address, optional, postcode, town, province, country, password, passwordConfimation } = this.state;
        fetch('http://localhost:3001/users/register', {
        method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name:name,
              surname:surname,
              email:email,
              phone:phone,
              address:address,
              optional:optional,
              postcode:postcode,
              town:town,
              province:province,
              country: country,
              password: password,
              passwordConfimation:passwordConfimation
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                responseJson.error ? alert(responseJson.error): localStorage.setItem('authToken',JSON.stringify(responseJson.token))
                  
        }).catch((e)=>{
            
        })
    }

    render(){
        let {passwordConfimation, password, name, surname, email, phone, address, optionalInformation, postcode, town, province, country } = this.state
    return(
        <div style={decor.small}>
        <p style={{...decor.register, ...decor.border}}>Register form</p>
            <div>
                <p style={decor.title}>Contact Details</p>
                <div style={decor.grid}>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your name"
                    value={name}
                    name="name"
                    ></input>
                     <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your surname"
                    value={surname}
                    name="surname"
                    ></input>
                     <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your email"
                    value={email}
                    name="email"
                    ></input>
                     <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your phone number"
                    value={phone}
                    name="phone"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    type='password'
                    placeholder="password"
                    value={password}
                    name="password"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="confirm your password"
                    value={passwordConfimation}
                    name="passwordConfimation"
                    type='password'
                    ></input>
                </div>
            </div>

            <div style={decor.borderTwo}>
                <p style={decor.title}>Delivery Details</p>
                <div style={decor.grid}>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your delivery address"
                    value={address}
                    name="address"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter optional information"
                    value={optionalInformation}
                    name="optionalInformation"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your postcode"
                    value={postcode}
                    name="postcode"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your town"
                    value={town}
                    name="town"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your province"
                    value={province}
                    name="province"
                    ></input>
                    <input style={decor.input} onChange={this.handleChange}
                    placeholder="enter your country"
                    value={country}
                    name="country"
                    ></input>
                </div>
            </div>
            <button 
            onClick={this.addRegister}
            className='buttons'style={decor.button}>
                Submit
            </button> 
        </div>
        )
    }
}

const decor = {
    small: {
        width: '70%',
        margin: 'auto'
    },
    register: {
        fontSize: '30px',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    title: {   
        fontSize: '25px',
        marginTop:'1em'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2em'
    },
    input:{
        outline: 'none',
        borderTop:'none',
        borderRight:'none',
        borderLeft: 'none',
        fontFamily:"'EB Garamond', serif",
        fontSize: '17px',
    },
    button: {
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '1px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        paddingTop: '15px',
        paddingBottom: '1em',
        paddingRight: '20px',
        paddingLeft: '20px',
        outline: 'none',
        marginTop: '2em',
        marginLeft: '46%',
    },
    border: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingBottom: '1em',
        paddingTop: '1em'
    },
    borderTwo: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingBottom: '3em',
        paddingTop: '1em'
    }
}