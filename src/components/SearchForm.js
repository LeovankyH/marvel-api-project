import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

// https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=captain%20america&limit=1&apikey=953ef49150af11983418a524e7385266

// const link ='https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
// const apiKey = '&apikey=953ef49150af11983418a524e7385266';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      data:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Target the input field value and store it inside the state called Value (CharacterName)
  handleChange(e) {
    this.setState({value: e.target.value});
  }

	linkSetUp(){
      const host = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=",
       character = this.state.value,
   limit_api_key = "&limit=1&apikey=953ef49150af11983418a524e7385266";
  
   return host + character + limit_api_key;
  }

  // Display an alert with the input field value
  // Note: Try to use the fetch promise onto the handleSubmit function
  handleSubmit(e) {
    e.preventDefault();
    fetch(this.linkSetUp())
    .then(r => r.json())
    .then(result => {
      console.log(result.data.results);
      this.setState({data: result.data.results});
    });
  }
  // https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=captain%20america&limit=1&apikey=953ef49150af11983418a524e7385266
  render(){
    return(
      <form>
        <input
          placeholder="Character Name" 
          value={this.state.characterName} 
          onChange={e => this.change(e)}
        />    
        <button onClick={e => this.handleSubmit(e)}><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    );
  }
}
export default SearchForm;