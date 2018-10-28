import React, { Component } from "react";

const imgUrls = [
	"https://wallpapercave.com/wp/LKo45Gk.jpg", 
	"http://cdn3-www.mandatory.com/assets/uploads/2017/07/Ultimate-Spider-Man-Comics-Spider-Man-Homecoming.jpg",
	"https://pre00.deviantart.net/1660/th/pre/f/2014/119/b/c/the_winter_soldier_by_colnchen-d7gfxbw.jpg",
	"https://www.hdwallpapers.in/download/the_avengers_iron_man-wide.jpg",
	"http://www.tokkoro.com/picsup/447626-punisher-wallpaper-full-hd.jpg"
];

class Carousel extends 	Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0
		};
		// Access "this" within function by binding
		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
	}

	prevSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});
	}

	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

  render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.prevSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}
	
// Left and Right Arrows
const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph }
	</div>
);

// Image
const ImageSlide = ({ url }) => {
  return (
    <img className="img-fluid image-slide" src={url} alt=" " />
  );
}

export default Carousel