import React from 'react';
import SearchBar from './SearchBar';
import youtube, { KEY } from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          part: 'snippet',
          q: term,
          type: 'video',
          maxResults: 25,
          key: KEY,
        },
      });
      this.setState({ videos: response.data.items, selectedVideo: null });
    } catch (err) {
      console.error(err);
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    const player = this.state.selectedVideo ? (
      <div className="ui row">
        <div className="eleven wide column">
          <VideoDetails video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    ) : (
      <div className="ui column">
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
    return (
      <div>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">{player}</div>
      </div>
    );
  }
}

export default App;
