import React from "react";
import Personal from './components/Personal.jsx';
import Address from './components/Address.jsx';
import Summary from './components/Summary.jsx';
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
		console.log("nexxt")
		this.setState({
			step : this.state.step + 1
		})
	}

	_previousPage = () => {
		console.log("previouse")
		this.setState({
			step : this.state.step - 1
		})
	}

	_handleData = (event) => {

		if(this.state.step === 0 ) {
			this._nextPage();
			// this.setState({
			// 	previous : ""
			// })
		} else if(this.state.step > 0) {
			if(this.state.step >= 1) {
				this._nextPage();
				this.setState({
					next : "disabled"
				})
			} else {
				this._previousPage();
				this.setState({
					previous : "disabled"
				})
			}
			
		} 

	}

	_renderSwitch = (param) => {
		console.log(param);
		console.log(arguments);
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
		console.log("Steps: " + this.state.step)
		
		return (
			<div>
				<form onSubmit={this._handleData}>
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