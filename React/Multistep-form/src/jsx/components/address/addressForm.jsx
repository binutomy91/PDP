import React from "react";
import Input from "../../Utils/textinput.jsx";

class AddressForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>

                <Input
                    name="addLine1"
                    label="Address Line 1"
                    placeholder = "Address line 1"
                    onChange={this.props.onChange}
                    value={this.props.address.addLine1} />

                <Input
                    name="addLine2"
                    label="Address Line 2"
                    placeholder = "Address line 2"
                    onChange={this.props.onChange}
                    value={this.props.address.addLine2} />

                <Input
                    name="town"
                    label="Town"
                    placeholder = "Town"
                    onChange={this.props.onChange}
                    value={this.props.address.town} />

                <Input
                    name="county"
                    label="County"
                    placeholder = "County"
                    onChange={this.props.onChange}
                    value={this.props.address.county} />

                <Input
                    name="postCode"
                    label="Post Code"
                    placeholder = "Post Code"
                    onChange={this.props.onChange}
                    value={this.props.address.postCode} />

            </div>
        )
    }
}

export default AddressForm;