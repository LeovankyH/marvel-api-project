import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

class SearchForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input:'',
      data:[]
    };
  }

  url(){
      const host = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=",
       inputName = this.state.input,
          apiKey = "&limit=1&apikey=953ef49150af11983418a524e7385266";
   return host + inputName + apiKey;
  }

  handleChange(e){
    this.setState({input: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    fetch(this.url())
      .then(r => r.json())
      .then(result => {
        console.log(result.data);
        this.setState({data: result.data.results});
        this.props.transferData(this.state.data);
        this.setState({input:''});
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="navbar-form navbar-left">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Character Search"
            value={this.state.input}
            onChange={this.handleChange}
          />
        <div className="input-group-btn">
          <button className="btn btn-default"
            type="submit" 
            onSubmit={this.handleSubmit}>
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;