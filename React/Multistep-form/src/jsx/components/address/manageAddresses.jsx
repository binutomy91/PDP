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


    render() {
        return(
			<AddressForm address={this.state.address}/>
        )
    }
}

export default ManageAddresses;