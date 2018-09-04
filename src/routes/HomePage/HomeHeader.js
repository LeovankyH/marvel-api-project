import React, { Component } from "react";
// import Home from './home';

const SlideItem = (props) =>{
  return (
    <div className="item-slide">
      <h1>{props.title}</h1>
      <img src={props.img}/>
    </div>
  );
}

const Indicators = (props) => {
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


class Slides extends Component {
  constructor(props) {
     super(props);
    this.state = {         
         slideshow: props.slide,         
         slideIndex: 0,
         Indicators: Indicators(),
         SlideItem: SlideItem(),
         listItems: [
          {title: 'Thor and Loki', img: 'https://wallpapercave.com/wp/LKo45Gk.jpg'},
          {title: 'Spider-Man', img: 'http://cdn3-www.mandatory.com/assets/uploads/2017/07/Ultimate-Spider-Man-Comics-Spider-Man-Homecoming.jpg'},
          {title: 'Winter Soldier', img: 'https://pre00.deviantart.net/1660/th/pre/f/2014/119/b/c/the_winter_soldier_by_colnchen-d7gfxbw.jpg'},
          {title: 'Punisher', img: 'http://www.tokkoro.com/picsup/447626-punisher-wallpaper-full-hd.jpg'},
          {title: 'Iron Man', img: 'https://www.hdwallpapers.in/download/the_avengers_iron_man-wide.jpg'}
        ]
    };
    this.currentIndex = 0;
    this.pause = false;
  }
  
  componentDidMount() {
    var that = this;
    this.timeout = setTimeout(function () {
        that.goTo('auto')
      }, 3000);    
  }
  
  componentDidUpdate() {
    var that = this;
    if(this.pause === true) {
      clearInterval(this.timeout);
      this.timePause = setTimeout(function(){
        clearInterval(this.timePause);        
      }, 8000);
      this.pause = false;
    }         
    this.timeout = setTimeout(function () {
      that.goTo('auto')
    }, 3000);
    
  }
    
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  
  goTo = (direction) => { 
      let index = 0;
      switch(direction) {
        case 'auto':
          index = this.currentIndex + 1;
          this.currentIndex = index >= this.listItems.length ? 0 : index;          
        break;
        case 'prev':
          index = this.currentIndex - 1;
          this.currentIndex = index < 0 ? this.listItems.length - 1 : index;
          this.pause = true;
        break;
        case 'next':
          index = this.currentIndex + 1;
          this.currentIndex = index >= this.listItems.length ? 0 : index;
          this.pause = true;
        break;
        default:
          this.currentIndex = direction;
          this.pause = true;
        break;
      }
      console.log('pause:', this.pause);
       this.setState({
         slideIndex: this.currentIndex,
         slideshow: this.listItems[this.currentIndex]
       });
  };
   
  render() {    
    return (
      <div className="slideshow-simple">
        <SlideItem 
          title={this.state.slideshow.title}
          img={this.state.slideshow.img}
        />        
        <Indicators 
          changeSlide={this.goTo} // function
          currentSlide={this.state.slideIndex}
          />
        <div className="wrap-control">
          <button className="btn btn-prev" value="Prev" onClick={() => this.goTo('prev')}>Prev</button>   
          <button className="btn btn-next" value="Next" onClick={() => this.goTo('next')}>Next</button>          
        </div>
      </div>
    );
  }    
}

export default Slides