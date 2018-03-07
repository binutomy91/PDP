import React from "react";
import Personal from './components/personal/managePersonal.jsx';
import Address from './components/address/manageAddresses.jsx';
import Summary from './components/summary/summary.jsx';
import Nav from './Utils/Nav.jsx';


class App extends React.Component {
	constructor(props) {
		super(props)

		this.state ={
			step: 0,
			previous: "disabled",
			next: ""
		}
	}

	_nextPage = () => {
		this.setState({
			step : this.state.step + 1
		})
	}

	_previousPage = () => {
		this.setState({
			step : this.state.step - 1
		})
	}

	_handleData = (event) => {
		event.preventDefault();
		if (this.state.step === 0 ) {
			this._nextPage();
			this.setState({
				previous : ""
			})
		} else if (this.state.step === 1) { 		
			this._nextPage();

		} else if (this.state.step === 2) {
			this._nextPage();
			this.setState({
				previous : "disabled"
			})
		}
	}

	_renderSwitch = (param) => {
		switch(param) {
			case 0:
				return <Personal />
			case 1:
				return  <Address />
			case 2:
				return  <Summary />
			default:
				return null;
		}

	  }
	 


	render() {
		return (
			<div>
				<form onSubmit={(e) => this._handleData(e)}>
					{this._renderSwitch(this.state.step)}
					<Nav 
						previous= {this.state.previous}
						next= {this.state.next} />
				</form>
			</div>

		);
	}
}

export default App;