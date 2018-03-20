import React,{ Component } from 'react';

export default class Error extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){ 
        const errorClass = this.props.visible ? 'error-message' : 'hidden';
        const { visible } =  this.props;
        if(!visible)
            return null;
        return (
            <div className={errorClass}>
                <span className='help-block' className='error'>{this.props.errorMessage}</span>
            </div>
        );
    }
}
    