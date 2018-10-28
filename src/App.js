import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


import Home from './routes/HomePage/home';
import GamePage from './routes/GamePage/gamepage';
import characterSearch from './routes/CharacterPage/characterPage';
import './stylesheet/App.css';

// const navImg = {
// 	width:"120px",
// 	height:"70px",
// }

const NavBar = () => (
			<div className="container">
			<Router>
				<nav className="navbar navbar-expand navbar-light">
					<ul className="navbar-nav navbar">
						<a className="navbar-brand" href="_">
							<img src="http://assets.stickpng.com/thumbs/585f9333cb11b227491c3581.png" className="img-fluid" alt=" "  />
						</a>
					
						<li className="nav-item"><Link to="/" className="nav-link"><FontAwesomeIcon icon={faHome} /></Link></li>
						<li className="nav-item"><Link to="/game-page" className="nav-link">Games</Link></li>
						<li className="nav-item"><Link to="/characterPage" className="nav-link">Character Search</Link></li>
						<li className="nav-item"><a href="http://marvel.com/" className="nav-link">Official Marvel Site</a></li>

						<Route exact path="/" component={Home}/>
						<Route exact path="/characterPage" component={characterSearch}/>
						<Route exact path="/game-page" component={GamePage}/>							
					</ul>
					{/*To move the search bar to the right replace navbar-left with navbar-right*/}
				</nav>
			</Router>
			</div>
		)
export default NavBar;