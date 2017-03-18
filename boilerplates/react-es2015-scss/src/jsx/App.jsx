import React from "react";
import config from "../config.json";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.config = config.fishList;
		this.state = {
			selectionArray: [],
			arrayTwo : []
		};

		this._data = {
			fishExist : false
		}

		this._onClickSelection = this._onClickSelection.bind(this);
		this._onClickRemove = this._onClickRemove.bind(this);

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
		selectionArray.pop(targetSelection);
		this.setState({selectionArray: this.state.selectionArray})
		console.log(selectionArray);
	}

	render() {
		const fishlist =  this.config;
		const selectionArray = this.state.selectionArray;

		for (var i=0; i < 44; i++) {
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
							<a data-tag={fish} onClick={this._onClickSelection}>Select</a>
							</div>;
		});

		const resultObejct = selectionArray.map( (result,index) => {
			return <div key={index}>
							<span>
								{result}
							</span>
							<a data-tag={result} onClick={this._onClickRemove}>X</a>
							</div>;
		});
		const results = resultObejct.length > 0 ? resultObejct : null;


		return (
			<div className='wrapper'>
				<section className='selection'>
					<h1> Selection</h1>
					<div className="fishList">
						{fishes}
					</div>
				</section>

				<section className='results'>
					<h1>Results</h1>
						<div>
							{results}
						</div>
				</section>

			</div>

		);
	}
}

export default App;
