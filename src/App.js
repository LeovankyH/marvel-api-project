import React, { Component } from 'react';
import characterList from './components/characterList';
import './App.css';

class App extends Component {
// https://gateway.marvel.com
	consturcter(){
		
	}
	render() {
		return (
			<div className="root">
						// <input type="text" />
						// <button type='submit' onclick="location.href = '../public/secondpage.html';">Hello world</button>
				<div> 
					<p>{this.props.title}</p>
				</div>
				<div><img src=""/></div>

				<div>
					<h3></h3>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
				</div>
				
				<div>
					<h2></h2>
					<p></p>
				</div>
				<div>
					<div>
						<img src=""/>
						<img src=""/>
						<img src=""/>
						<img src=""/>
					</div>
				</div>

			</div>
		);
	}
}

export default App;