import React from "react";

class Address extends React.Component{
    constructor(props){
        super(props)
        
    }


    render() {
        return(
            <div>
                <div className="form-group row">
                    <label htmlFor="addressLine1" className="col-sm-2 col-form-label">Addres Line 1</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Address line 1"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="addressLine2" className="col-sm-2 col-form-label">Addres Line 2</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Address line 2"/>
                    </div>
                </div>

               <div className="form-group row">
                    <label htmlFor="city" className="col-sm-2 col-form-label">City / Town</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="City"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="county" className="col-sm-2 col-form-label">County</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="County"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="postcode" className="col-sm-2 col-form-label">Postcode</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Postcode"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Address;