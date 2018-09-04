import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

import Home from './routes/HomePage/home';
import GamePage from './routes/GamePage/gamepage';
import characterSearch from './routes/CharacterPage/characterPage';
import './stylesheet/App.css';

const NavBar = () => (
			<nav className="">
			<Router>
				<div className="">
					<div className="">
						<a className="" href="__ooooFakelink">Marvel Heroes</a>
					</div>
					<ul className="">
						<li><Link to="/"><FontAwesomeIcon icon={faHome}/></Link></li>
						<li><Link to="/game-page">Games</Link></li>
						<li><Link to="/characterPage">Character Search</Link></li>
						<li><a href="http://marvel.com/">Official Marvel Site</a></li>
						
						<Route exact path="/" component={Home}/>
						<Route exact path="/characterPage" component={characterSearch}/>
						<Route exact path="/game-page" component={GamePage}/>							
					</ul>
					{/*To move the search bar to the right replace navbar-left with navbar-right*/}
				</div>
			</Router>
			</nav>

		
		)
export default NavBar;