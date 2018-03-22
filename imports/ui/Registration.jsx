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
          message : ''
      }
    }

    handleSubmit = (event) => {
        const that = this;
        //let errorMsg;
       //event.preventDefault();
        email = this.email.state.value;
        password = this.password.state.value;
        name = this.name.state.value;
        confirmpassword = this.confirmPassword.state.value;
        console.log( '&&' , !email, '&&', !password, '&&',!confirmpassword)
        if(!email || !password || !confirmpassword )
        {   console.log('ok');
            this.setState({message : 'Please fill required fields'});
            errorMsg = 'Please fill required fields'

        }
        else 
        {
        
            if( this.name.state.valid && this.email.state.valid && this.password.state.valid && this.confirmPassword.state.valid){
                Meteor.call('user_db1.insert1',name,email,password,function(error,resp){
                    console.log('resp ',resp,error``)
                    if(error){
                        errorMsg = 'User Exists';
                        that.setState({message : errorMsg}); 
                   
                   
                    }
                    else if(resp){
                        errorMsg =  'Registration Complete!'; 
                        that.setState({message : errorMsg}); 
                    }   
                });
            }
            else {
                if(this.confirmpassword.state.valid){
                    errorMsg = 'Password doesnt match'
                    that.setState({message : errorMsg}); 
                    //errorMsg1 =  'Password doesnt match'
                    //this.confirmpassword.state.errorMessage = 'Password doesnt match'
                }else {
                    errorMsg =  'Invalid details';
                    that.setState({message : errorMsg});
                } 
            }
        }
        
        console.log('errro',errorMsg)
        
       
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
                    <TextElement  type= 'name' ref={(input) => this.name = input } labelName='Name :' name='name'/>
                    <br/>
                    <TextElement type= 'email' ref={(input) => this.email = input } labelName='Email :' name='email' />
                    <br/>
                    <TextElement type= 'password' ref={(input) => this.password = input }labelName='Password :' name='password' />
                    <br/>
                    <TextElement type= 'password'ref={(input) => this.confirmPassword = input } labelName='Confirm Password :' name='confirmPassword' error1={errorMsg}/>
                    <br/>
                    <button type='button' value='Submit' onClick={this.handleSubmit.bind(this)} >Register </button>
                    <br/>
                    <br/>
                    <br/>
                    <button type='button' value='Submit' onClick={this.handleLoginSubmit.bind(this)} >Already a User? Login </button>
                </form>
                <br/>
                <br/>
               <h2 className='error'>{errorMsg}</h2>
                
            </center>
        );
    }
    
   
  }
  export default withTracker(() => {
    return {
    //   user: Users.find({}).fetch(),
    };
  })(Registration);
