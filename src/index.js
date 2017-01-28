import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Remember to restrict the key usage to the domain!
// const API_KEY = 'AIzaSyBD-4BfWdw6Xc3pQJ_ITr5y92vb_iTkC-I';

// server key for development, restriction based on IP
const API_KEY = 'AIzaSyAQuIZXtIxO4sGtTJckvQzal38TBMRHUFw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({key: API_KEY, term: 'kitties'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });

    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
