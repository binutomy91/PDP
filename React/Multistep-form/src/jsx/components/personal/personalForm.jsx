import React from 'react';

const PersonalForm = (props) => {
    return(
        <div>
            <div className="form-group row">
                <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">Email address</label>
                <div className="col-sm-10">
                    <input type="email" 
                        className="form-control" 
                        placeholder="Email"
                        name="email"
                        onChange={props.onChange}
                        value={props.personal.email}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" 
                        className="form-control" 
                        placeholder="First name"
                        name="firstName"
                        onChange={props.onChange}
                        value={props.personal.firstName}/>
                    </div>
            </div>

            <div className="form-group row">
                <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Last name"
                        name="lastName"
                        onChange={props.onChange}
                        value={props.personal.lastName}/>
                </div>
            </div>
        </div>
    )
}

export default PersonalForm;