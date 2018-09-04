import React, { Component } from "react";
import Slides from './HomeHeader.js';

const SlideItem = (props) =>{
		return (
			<div className="item-slide">
				<h1>{props.title}</h1>
				<img src={props.img}/>
			</div>
		);
	}

const	Indicators = (props) => {
	const listIndicators = this.listItems.map((item, index) => 
		<li
			key={index}
			className={props.currentSlide === index ? 'active' : ''} 
			onClick={() => props.changeSlide(index)}
		>{index + 1}</li>
	);
	return (
		<ul className="indicators">
			{listIndicators}
		</ul>
	);
};

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			Slides: SlideItem(),
			indicators: Indicators(),
			listItems: [
				{title: 'Thor and Loki', img: 'https://wallpapercave.com/wp/LKo45Gk.jpg'},
				{title: 'Spider-Man', img: 'http://cdn3-www.mandatory.com/assets/uploads/2017/07/Ultimate-Spider-Man-Comics-Spider-Man-Homecoming.jpg'},
				{title: 'Winter Soldier', img: 'https://pre00.deviantart.net/1660/th/pre/f/2014/119/b/c/the_winter_soldier_by_colnchen-d7gfxbw.jpg'},
				{title: 'Punisher', img: 'http://www.tokkoro.com/picsup/447626-punisher-wallpaper-full-hd.jpg'},
				{title: 'Iron Man', img: 'https://www.hdwallpapers.in/download/the_avengers_iron_man-wide.jpg'}
			]
		} 
	}

	render(){
		return(
				<header>
					<Slides slide={this.listItems[0]}/>
				</header>
				
		);
	}
}
  export default Home;