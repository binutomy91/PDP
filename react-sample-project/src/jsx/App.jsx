import React from "react";
import config from "../config.json";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.config = config.fishList;
		this.state = {
			selectionArray: [],
			arrayTwo : [],
			canLiveTogether: null
		};

		this._data = {
			fishExist : false
		}

		this._onClickSelection = this._onClickSelection.bind(this);
		this._onClickRemove = this._onClickRemove.bind(this);
		this._onSubmission = this._onSubmission.bind(this);

	}

	_onClickSelection(e) {
		var selectionArray = this.state.selectionArray;
		var targetFish = e.target.attributes.getNamedItem('data-tag').value;
		var fishExist = selectionArray.findIndex(item => item === targetFish);
		this._data.fishExist = fishExist > -1;

		if (selectionArray.length == 0) {
			selectionArray.push(targetFish);
			this.setState({selectionArray :selectionArray})
		}else if (!this._data.fishExist) {
			selectionArray.push(targetFish);
			this.setState({selectionArray :selectionArray})
		}

	}

	_onClickRemove(selection) {
		var targetSelection = selection.target.attributes.getNamedItem('data-tag').value;
		var selectionArray = this.state.selectionArray;
		var updatedArray = selectionArray.filter(function(item,i) {return item!== targetSelection})
		this.setState({selectionArray: updatedArray})
		this.config.push(targetSelection);
	}

	_onSubmission(){

		var request = new XMLHttpRequest();
		var self = this;
		request.open('POST', 'https://fishshop.attest.tech/compatibility');
		request.setRequestHeader('Content-Type', 'application/json');
		var body = {
			'fish': this.state.selectionArray
		};
		request.send(JSON.stringify(body));
		request.onreadystatechange = function () {
			if (request.readyState === 4) {
				var response = JSON.parse(request.responseText);
				if (request.status == 200 && request.status < 400) {
						this.setState({canLiveTogether : response.canLiveTogether});
				}else {
					console.error('There was an error');
				}
			}

		}.bind(this);
	}

	render() {
		const fishlist =  this.config;
		const selectionArray = this.state.selectionArray;
		const fishlistLength = 45;

		for (var i=0; i < fishlistLength; i++) {
		    var index = fishlist.indexOf(selectionArray[i]);
		    if (index > -1) {
		        fishlist.splice(index, 1);
		    }

		};


		const fishes = fishlist.map( (fish,index) => {
			return <div key={index}>
							<span>
								{fish}
							</span>
							<a data-tag={fish} onClick={this._onClickSelection}>+</a>
							</div>;
		});

		const resultObejct = selectionArray.map( (result,index) => {
			return <div key={index}>
							<span>
								{result}
							</span>
							<a data-tag={result} onClick={this._onClickRemove}>x</a>
							</div>;
		});
		const results = resultObejct.length > 0 ? resultObejct : null;
		const submitBtn = selectionArray.length > 1 ? <a className='submit' onClick={this._onSubmission}>Submit</a> : null;
		const bodyClass = this.state.canLiveTogether ? 'wrapper finished' : 'wrapper';

		return (
			<div className={bodyClass}>
				<section className='selection'>
					<h1> Selection</h1>
					<div className="fishList">
						{fishes}
					</div>
				</section>

				<section className='results'>
					<h1>Results</h1>
						<div className="fishList">
							{results}
							{submitBtn}
						</div>
				</section>

				<section className='results-page'>
					<h1> Fish can live together!</h1>
				</section>

			</div>

		);
	}
}

export default App;
