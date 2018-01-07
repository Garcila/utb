import React from 'react';

class SearchBar extends React.Component {
  state = {word: ''};
  
  handleInput = (word) => {
    this.setState({ word });
    this.props.searchVideo(word);
  }

  render() {
    return (
      <form className='search'>
        <img className='loupe' src='../search.png' alt='search' />
        <input
          type='text'
          value={this.state.word}
          onChange={e => this.handleInput(e.target.value)} 
          className='input_search'
          placeholder="type to search videos"
        />
      </form>
    );
  }
};

export default SearchBar;
