import React from "react";
import AddressForm from './addressForm.jsx';


class ManageAddresses extends React.Component{
    constructor(props){
        super(props)
		
		this.state = {
			address : {
				addLine1 : '',
                addLine2 : '',
                town : '',
                county : '',
                postCode : ''
			}
		}
    }

    _setAddressState = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        console.log(field + " val " + value);
        this.setState({
            address : this.state.address
        })
    }


    render() {
        return(
            <AddressForm 
                address={this.state.address}
                onChange = {this._setAddressState}/>
        )
    }
}

export default ManageAddresses;