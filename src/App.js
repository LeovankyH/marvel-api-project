import React, { Component } from 'react';
// import comicBook from './components/comicBook';
import './App.css';
import SearchForm from './components/SearchForm';
// import loading from './components/loading';

const url = 'https://gateway.marvel.com/v1/public/characters?name=captain%20america&apikey=953ef49150af11983418a524e7385266';

class App extends Component {
    constructor(){
        super();
        this.state = {
			data:[],
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
	// onChange = updateValue => {
	// 	this.setState({
	// 		fields: {
	// 			...this.state.fields,
	// 			...updateValue
	// 		}
	// 	});
	// 	console.log("App comp got:", this.fields);
	// }
	render() {
		return (
			<div className="container-fluid">
				{this.state.data.map((item, key) => {
				return <div key={key} className=''>
					{/* Top section - search Form */}
						<div className="row top">
						 <div className="col-md-12">
						 	<SearchForm />
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
							{/* Comic book section */}
							<div className="col-md-6" >
								<h3>Comic Book related to {item.name}.</h3>
								{item.comics.items.map((subitem, i)=> {
									return(
											<ul key={i}>
											
												<li>{subitem.name}</li>
											</ul>
									)
								})}
							</div>
						</div>
				</div>;
				})}
			</div>
		);
	}
}

export default App;