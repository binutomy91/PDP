import React from "react";
import PersonalForm from './personalForm.jsx';

class ManagePersonal extends React.Component{
    constructor(props){
        super(props)
		
		this.state = {
			personal : {
				email : '',
				firstName : '',
				lastName : ''
			}
		}
	}
	
	_setPersonalState = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        this.state.personal[field] = value;
        this.setState({
            personal : this.state.personal
		})
		
		console.log("Email " + this.state.personal.email);
		console.log("Fname " + this.state.personal.firstName);
		console.log("Lname " + this.state.personal.lastName);
    }


    render() {
        return(
			<PersonalForm 
				personal={this.state.personal} 
				onChange = {this._setPersonalState} />
        )
    }
}

export default ManagePersonal;