import React from 'react';

const PersonalForm = (props) => {
    return(
        <div>
            <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">Email address</label>
                <div className="col-sm-10">
                    <input className="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="First name"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="lasttName" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Last name"/>
                </div>
            </div>
        </div>
    )
}

export default PersonalForm;