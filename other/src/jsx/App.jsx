import React from "react";
import config from '../config.json';


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			offers: config.offers
		};

		this.data = {

		}
	}

	render() {
		const offers = this.state.offers;
		console.log(offers);

		let results = offers.map( (item, i ) => {
            return (
                <section className="block block__content" key={i}> 
					<li className="block__list">
						<span>{i+1}</span>
					</li>

					<li className="block__list image">
						<div className="wrapper">
							<img src={item.image} alt="" />
						</div>
					</li>

					<li className="block__list">
						<div className="wrapper">
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star checked"></span>
							<span className="fa fa-star"></span>
						</div>
					</li>

					<li className="block__list bonus" dangerouslySetInnerHTML={{__html: item.copy}} />

					<li className="block__list">
						<button onClick={item.link}>
							Play Now
						</button>
					</li>
                </section>
            );
        });



		return (
			<div>
				{results}
			</div>
		);
	}
}

export default App;