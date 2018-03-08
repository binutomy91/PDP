import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props)
    }
    
    render() {
        let wrapperClass = 'form-group row';
        if (this.props.error) {
            wrapperClass += ' ' + 'has-error';
        }
        return(
            <div className={wrapperClass}>           
                <label htmlFor={this.props.name} className="col-sm-2 col-form-label">{this.props.label}</label>
                <div className="col-sm-10">
                    <input type="text" 
                        className="form-control" 
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        ref={this.props.name}
                        onChange={this.props.onChange}
                        value={this.props.addLine1}/>
                </div>
            </div>
        )
    }
}

export default Input;