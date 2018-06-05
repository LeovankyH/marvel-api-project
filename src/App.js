import React, { Component } from 'react';
// import characterList from './components/characterList';
import './App.css';
import SearchForm from './components/SearchForm';
// import loading from './components/loading';
// import characterList from './components/characterList';

// const a ='https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
// const b = 'x';
// const api_key = '&apikey=953ef49150af11983418a524e7385266';
// const characterName = '';
const url = 'https://gateway.marvel.com/v1/public/characters?name=captain%20america&apikey=953ef49150af11983418a524e7385266';

class App extends Component {
    constructor(){
        super();
        this.state = {
			data:[]
        };
    } 
// Fetch data from api... Store it inside state.data
	componentDidMount() {
		fetch(url)
			.then(r => r.json())
			.then(result => {
				console.log(result.data.results);
				this.setState({data: result.data.results});
			});
	}
// render form input
	onSubmit = (fields) => {
		console.log("App comp got:", fields);
	}
	render() {
		return (
			<div className="container-fluid">
				{this.state.data.map((item, key) => {
					return <div key={key} className=''>
					{/* Top section - search Form */}
						<div className="row top">
						 <div className="col-md-12">
						 	<SearchForm onSubmit={fields => this.onSubmit(fields)} />
						 </div>
						</div>
					{/* mid section - Name description and thumbnail*/}
						<div className="row mid">
							<div className="col-md-3">
								<img alt={item.name} src={item.thumbnail.path+"/portrait_uncanny.jpg"}/>
							</div>
							<div className="col-md-9">
								<h1>{item.name}</h1>
								<p>{item.description}</p>
							</div>
						</div>
					{/* bottom section */}
						<div className="row bottom">
							<div className="col-md-3">
								<p>
								</p>
							</div>
							{/* Comic book section */}
							<div className="col-md-9">
							 <div className="row">
								 <div className="col-sm-3 box">
									<img alt='' src="https://www.janiking.com/wp-content/uploads/2018/05/placeholder.jpg"/>
									<h5>comic title here</h5>
								 </div>
								 <div className="col-sm-3 box">
								  <img alt='' src="https://www.janiking.com/wp-content/uploads/2018/05/placeholder.jpg"/>
								  <h5>comic title here</h5>
								 </div>
								 <div className="col-sm-3 box">
								  <img alt='' src="https://www.janiking.com/wp-content/uploads/2018/05/placeholder.jpg"/>
								  <h5>comic title here</h5>
								 </div>
								 <div className="col-sm-3 box">
								  <img alt='' src="https://www.janiking.com/wp-content/uploads/2018/05/placeholder.jpg"/>
								  <h5>comic title here</h5>
								 </div>
							 </div>
							</div>
						</div>
					</div>;
				})}
			</div>
		);
	}
}

export default App;