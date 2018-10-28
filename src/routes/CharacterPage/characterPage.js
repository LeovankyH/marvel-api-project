import React, { Component } from "react";
// import comicBook from './components/comicBook';
import "../../stylesheet/App.css";
import SearchForm from "../../components/SearchForm";
// import Navbar from './routes/navRoute';

class characterSearch extends Component {
	constructor() {
		super();
		this.submitData = this.submitData.bind(this);
		this.state = {
			data: []
		};
	}

	submitData(i) {
		this.setState({ data: i });
	}

	render() {
		return (
			<div>
				<div className="row search_placeholder">
					<div className="col-md-8"> 
						<img src={"marvel-logo.jpg"} alt=" " />
					</div>
					<div className="col-md-4">
						<p>Lorem ispum</p>
					</div>
				</div>
				<div clasName="row">
					<div className="col-md-12">
						<SearchForm transferData={this.submitData} />
					</div>
				</div>
				{this.state.data.map((item, key) => {
					return (
						<article key={key} className="">
							<div className="row mid character-bio">
								<div className="col-md-3 chara-img">
									<img
										alt={item.name}
										src={item.thumbnail.path + "/portrait_uncanny.jpg"}
									/>
								</div>
								<div className="col-md-9">
									<div className="description">
										<h1>{item.name}</h1>
									</div>
									<div className="description">
										<p>{item.description}</p>
									</div>
								</div>
							</div>
							{/* bottom section */}
							<div className="row bottom comicbooks">
								{/* Comic book section */}
								<div className="col-md-5">
									<h3>Comic Book related to {item.name}.</h3>
									{item.comics.items.map((subitem, i) => {
										return (
											<ul key={i}>
												<li>{subitem.name}</li>
											</ul>
										);
									})}
								</div>
								<div className="col-md-7">
									<p>lorem ipsum</p>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		);
	}
}

export default characterSearch;
