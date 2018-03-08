import React from 'react';
import Input from "../../Utils/textinput.jsx";

class PersonalForm extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <Input
                        name="email"
                        label="Email"
                        placeholder = "Email"
                        onChange={this.props.onChange}
                        value={this.props.personal.email} />
    
                <Input
                        name="firstName"
                        label="First Name"
                        placeholder = "First Name"
                        onChange={this.props.onChange}
                        value={this.props.personal.firstName} />
                
                <Input
                        name="lastName"
                        label="Last Name"
                        placeholder = "Last Name"
                        onChange={this.props.onChange}
                        value={this.props.personal.lastName} />
            </div>
        )
    }
     
}

export default PersonalForm;