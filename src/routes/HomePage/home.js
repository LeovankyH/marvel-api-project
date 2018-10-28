import React, { Component } from "react";
import Carousel from './HomeHeader.js';
import SuggestionBox from './suggestion.js';
import Aside from './aside.js';

class Home extends Component{
	render() {
		return (
			<div>
				<header>
					<Carousel/>
				</header>
				<article>
					<SuggestionBox />
					<Aside />
				</article>
			</div>
		);
	}
}
export default Home;