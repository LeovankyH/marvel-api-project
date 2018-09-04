import React, { Component } from 'react';
// import comicBook from './components/comicBook';
import './stylesheet/homepage.css'
// import Navbar from './routes/navRoute';

class Carousel extends Component {
  constructor(){
    super();
    this.setState({
      content:[]
    });
  }
  render () {
    return (
      // Slideshow container
    <div>
      <div className="slideshow-container">
      {/* Full-width images with number and caption text */}
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="https://wallpapercave.com/wp/LKo45Gk.jpg" alt=" "/>
          <div className="text">Thor</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="http://cdn3-www.mandatory.com/assets/uploads/2017/07/Ultimate-Spider-Man-Comics-Spider-Man-Homecoming.jpg" alt=" "/>
          <div className="text">Spider-Man</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="https://pre00.deviantart.net/1660/th/pre/f/2014/119/b/c/the_winter_soldier_by_colnchen-d7gfxbw.jpg" alt=" "/>
          <div className="text">Winter Soldier</div>
        </div>

        {/* Next and previous buttons */}
        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <br/>

      {/* The dots */}
      <div classNameName="text-align-center">
        <span className="dot" onclick="currentSlide(1)"></span> 
        <span className="dot" onclick="currentSlide(2)"></span> 
        <span className="dot" onclick="currentSlide(3)"></span> 
      </div>
    </div>
    );
  }
}
	  
	export default Carousel;
	