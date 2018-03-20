import React, { Component } from 'react';
import propTypes from 'prop-types';
import ErrorElement from './Error';
import TextElement from './TextElement';
import { browserHistory ,history} from "react-router-dom";

export class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email  : '',
          password : '',
          message : '',
      }
    }

    handleSubmit=(event)=>{
        
        event.preventDefault();
        const that=this;
        let email = this.email.state.value;
        let password = this.password.state.value;
        this.setState({message : ''})
       
        if( this.email.state.valid && this.password.state.valid){
            
            Meteor.call('user_db1.find1',email,password,(err,resp)=>{
                //console.log( err , '!!' ,resp);
                if(!resp){
                    this.setState({message : 'Incorrect email/password'})
                    
                }
                else {
                    this.setState({message : 'Logged in'});
                    console.log('check');
                    that.props.history.push('/App');
                }
        })
        }    
        else {
            this.setState({message : 'Invalid Credentials'})
        }
    }


    render() {
        console.log('---- Render---');
        let {message}=this.state;
        return (
            
            <center > 
                <h1 className='h1-class'>Login</h1>

                <form  className='form-style-1' >
                    
                    <TextElement type= 'email' ref={(input) => this.email = input }  labelName='Email :' name='emailValue' />
                    <br/>
                    <TextElement type= 'password' ref={(input) => this.password = input } labelName='Password :' name='password' />
                    <br/>
                    
                    <button type='submit' value='Submit' onClick={this.handleSubmit.bind(this)} >Login </button>
                </form>
                <br/>
                <br/>
                <h2 className='error'>{message}</h2>
                
            </center>
        );
    }
    

   
   
  }

  
