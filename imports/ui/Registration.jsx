import React, { Component } from 'react';
import propTypes from 'prop-types';
import ErrorElement from './Error';
import TextElement from './TextElement';
import { withTracker } from 'meteor/react-meteor-data';
import { history } from "react-router-dom";
import { Users } from '../api/user';
let errorMsg='';
export class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name : '',
          email :'',
          password :'',
          message : ''
      }
    }

    handleSubmit = (event) => {
        const that = this;
        //let errorMsg;
        event.preventDefault();
        email = this.email.state.value;
        password = this.password.state.value;
        name = this.name.state.value;
        
        if( this.name.state.valid && this.email.state.valid && this.password.state.valid && this.confirmpassword.state.valid){
            Meteor.call('user_db1.insert1',name,email,password,function(error,resp){
                if(resp == 11000){
                   'User Exists';
                }
                else if(resp){
                    errorMsg =  'Registration Complete!'; 
                }   
            });
        }
        else {
            if(this.confirmpassword.state.valid){
                errorMsg = 'Password doesnt match'
                //errorMsg1 =  'Password doesnt match'
                this.confirmpassword.state.errorMessage = 'Password doesnt match'
            }else 
            errorMsg =  'Invalid details';
        }
        this.setState({message : errorMsg}); 
       
    }
     handleLoginSubmit = (event) =>{
         this.props.history.push('/Login')
     }
    
    render() {
        console.log('---- Render---');
        const { message} = this.state;

        return (
          
            <center >
                <h1 className='h1-class'>Registration </h1>

                <form  className='form-style-1' >
                    <TextElement  type= 'name' ref={(input) => this.name = input } labelName='Name :' name='nameValue'/>
                    <br/>
                    <TextElement type= 'email' ref={(input) => this.email = input } labelName='Email :' name='emailValue' />
                    <br/>
                    <TextElement type= 'password' ref={(input) => this.password = input }labelName='Password :' name='password' />
                    <br/>
                    <TextElement type= 'password'ref={(input) => this.confirmpassword = input } labelName='Confirm Password :' name='confirmPassword' error1={errorMsg}/>
                    <br/>
                    <button type='button' value='Submit' onClick={this.handleSubmit.bind(this)} >Register </button>
                    <br/>
                    <br/>
                    <br/>
                    <button type='button' value='Submit' onClick={this.handleLoginSubmit.bind(this)} >Already a User? Login </button>
                </form>
                <br/>
                <br/>
                <h2 className='error'>{message}</h2>
                
            </center>
        );
    }
    
   
  }
  export default withTracker(() => {
    return {
    //   user: Users.find({}).fetch(),
    };
  })(Registration);
