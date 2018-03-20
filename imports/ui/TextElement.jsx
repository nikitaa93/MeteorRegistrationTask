import React,{ Component } from 'react';
import propTypes from 'prop-types';
import   ErrorElement from './Error';
let pass ='';
export default class TextElement extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
            valid: false,
            errorMessage: 'Input is invalid',
            errorVisible: false,
            requied : false,
            
            //validClass: ''
        };   
       
    }

    componentDidMount() {
        this.handleChange(event);
        this.setState({
            errorVisible : false,
            required : false
            
        });
    }
    handleChange(event){
        let valid = false;
        let value = event.target.value;
        
        const { name, type } = this.props;
        
        if(type == 'email') {
            valid = this.validateEmail(value);
        }
        else if(type == 'name') {
            valid = this.validateName(value);
        }else if(type== 'password' && name == 'confirmPassword'){    
            valid = this.validateConfirmPassword(pass,value);
        }
        else if( !type || type == 'text' || type == 'password'  ) {
            if(type == 'password' && name == 'password'){
                pass = value;
                //console.log('in handlechange pass',pass )
            }
            valid = true;
        }
        
        this.validation(value, valid);
        
    }

    validation (value, valid) {
      
        let {required} = this.state;
        let {name} = this.props;
        //The valid variable is optional, and true if not passed in:
        if (typeof valid === 'undefined') {
            valid = true;
        }
        
        if ( required && !value ) {
            this.setState({
                errorMessage  : 'Required',
                valid         : false,
                errorVisible  : true 
            });
  
        } else if (!valid) {
            if(name == 'password' || name == 'confirmPassword'){
                this.setState({
                    errorMessage  : 'Passwords doesnt match',
                    valid         : false,
                    errorVisible  : true 
                });
            }else{
                this.setState({
                    errorMessage  : 'Please enter a valid value',
                    valid         : false,
                    errorVisible  : true 
                });
            }
        }else{
            //console.log('- input valid --');
            this.setState({
                errorMessage : ' ',
                errorVisible: false,
                value : value,
                valid,
            });
        
        
        }
        
        
    }
    
    validateEmail(value) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //console.log('test email : ',re.test(value));
        return re.test(value);
    }
  
    validateName(value) {
        let re=/^[a-zA-Z][a-zA-Z. _]+$/;
        //console.log('test name : ',re.test(value));
        return re.test(value);
    }
  
    validateConfirmPassword(pass,confirmPassword){
        
        //console.log('pass : ',pass,' confirm pass ',confirmPassword)
        if(pass == confirmPassword)
            return true;
        else 
            return false;
            // this.validation( confirmPassword, !!(password == confirmPassword) );
    }
    render() {
        const { props, state }                      = this;
        const { name}                               = props;
        let   { type,labelName }                    = props;
        const { errorVisible, errorMessage }        = state;
        return (      
            <center >
                <label>{labelName}
                    <input
                        type        = { type }  
                        name        = { name } 
                        id          = { name } 
                        className   = { 'form-control input ' } 
                        onChange    = { this.handleChange } 
                    />
                </label>
                <ErrorElement 
                    visible      = { errorVisible } 
                    errorMessage = { errorMessage }
                />
            </center>
        );
    }
}
TextElement.propTypes = {
    name : propTypes.string.isRequired
};
  

    