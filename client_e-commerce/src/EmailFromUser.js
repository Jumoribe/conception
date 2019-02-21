import React from 'react';
import axios from 'axios';

export default class EmailFromUser extends React.Component {
  state = {
    message: '',
    subject: ''
  }

  handleChange = e =>{
    this.setState({[e.target.name]:e.target.value}, () => {
      //console.log(this.state)
    })
  }

  handleClick = async (e) => {
   //e.preventDefault();
    let url = 'http://localhost:8080/users/sendEmail'
    try{
      const sent = await axios.post(url, {
        subject: this.state.subject,
        message: this.state.message
      })
      //debugger
    }
    catch(error){
      debugger
    }
    this.setState({message: '', subject: ''})
  }

  render() {
    return (
      <div>
      <p style={{...decor.border, ...decor.title}}>We want to hear you!</p>
      <div style={decor.form}>
      <div>
        <input onChange={this.handleChange}
         style={decor.subject}
        placeholder='Write your subject'
        value={this.state.subject}
        name='subject'>
        </input>
      </div>
      <div>
        <textarea 
        style={decor.message}
        onChange={this.handleChange}
        placeholder='Write your message'
        value={this.state.message}
        name='message'
        >
        </textarea>
        </div>
        <div style={decor.btnSend} onClick={this.handleClick} className="buttons">
        {/* <button style={decor.btnbtn}  */}
        Send!
        {/* </button> */}
        </div>
        </div>
      </div>
    );
  }  
}

const decor = {
  form: {
    width: '30%',
    padding: '10px',
    marginLeft: '35%',
    marginTop: '5%',
    border: '2px solid rgb(26, 27, 28)'
  },
  message: {
    //border: '1px solid #ddd',
    height: '100px',
    width: '70%',
    marginRight: '15%',
    marginLeft: '15%',
    marginTop: '8%',
    fontSize: '13px'
  },
  subject: {
    width: '70%',
    outline: 'none',
    borderTop:'none',
    borderRight:'none',
    borderLeft: 'none',
    borderBottom: '1px solid #ddd',
    marginRight: '15%',
    marginLeft: '15%',
    marginTop: '15%',
    fontSize: '13px'
  },
  btnSend: {
    backgroundColor: 'rgb(26, 27, 28)',
    color: 'white',
    fontSize: '13px',
    textTransform: 'uppercase',
    border: '2px solid rgb(26, 27, 28)',
    position: 'relative',
    textAlign: 'center',
    width: '100px',
    height: '25px',
    outline: 'none',
    paddingTop: '0.5em',
    marginTop: '2em',
    marginBottom: '1em',
    marginLeft: '37%'
  },
  border:{
    borderBottom: '2px solid rgb(42, 43, 45)',
    marginLeft: '15%',
    marginRight: '15%',
  },
  title: {
  fontSize: '30px',
  textAlign: 'center',
  marginTop: '2em',
  paddingBottom: '2em',
  textTransform: 'uppercase'
  }
}