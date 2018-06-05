import React, { Component } from 'react';
// eslint-disable-next-line
// import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

class SearchForm extends Component {	
  state = {
    characterName:"",
  };
  
  change = e => {
    this.setState ({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    this.props.onSubmit(this.state);
    e.preventDefault();
    this.setState ({ characterName: "" });
  };
  render() {
    return (
      <form>
        <input 
          name = "characterName"
          type="text" 
          value={this.state.characterName} 
          onChange={e => this.change(e)} 
          placeholder="Character Name"
        />    
        <button type="submit" value="Submit" onClick={e => this.state.onSubmit(e)}><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    );
  }
}
export default SearchForm;