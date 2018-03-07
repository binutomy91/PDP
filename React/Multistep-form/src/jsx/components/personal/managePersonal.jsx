import React from "react";
import PersonalForm from './personalForm.jsx';

class ManagePersonal extends React.Component{
    constructor(props){
        super(props)
		
		this.state = {
			personal : {
				id: '',
				firstName : '',
				lasttName : '' 
			}
		}
    }


    render() {
        return(
			<PersonalForm 
				personal={this.state.personal} />
        )
    }
}

export default ManagePersonal;