import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/Search_bar';
import VideoDetail from './components/Video_detail';
import VideoList from './components/Video_list';

const API_KEY = 'AIzaSyAchYhOcuXc6ZWEZ02s3QqEBI3S6VzkYvg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      videos: [],
      selectedVideo: null
    };

    this.searchVideo = this.searchVideo.bind(this);
    this.makeSelectedVideo = this.makeSelectedVideo.bind(this);
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'CSS Grid' }, data =>
      this.setState({ videos: data, selectedVideo: data[0] })
    );
  }

  searchVideo(e) {
    e.preventDefault();
    const searchTerm = e.target.value;
    YTSearch(
      { key: API_KEY, term: searchTerm },
      _.debounce(videos => this.setState({ searchTerm, videos }), 800)
    );
  }

  makeSelectedVideo(id) {
    const selectedVideo = id;
    this.setState({selectedVideo});
  }

  render() {
    return (
      <div>
        <SearchBar
          search={this.searchVideo}
          searchTerm={this.state.searchTerm}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList selected={this.makeSelectedVideo} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
