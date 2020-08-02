import React from 'react';
import SearchBar from './SearchBar';
import youtube, { KEY } from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null, comments: [] };
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

  onVideoSelect = async (video) => {
    try {
      const commentResponse = await youtube.get('/commentThreads', {
        params: {
          part: 'id,snippet',
          videoId: video.id.videoId,
          key: KEY,
        },
      });
      console.log('seting coment data state');
      this.setState({ comments: commentResponse.data.items });
    } catch (err) {
      console.error(err);
    }
    console.log('setting selsected video state');
    this.setState({ selectedVideo: video });
    console.log(this.state.comments);
  };
  render() {
    const player = this.state.selectedVideo ? (
      <div className="ui row" style={{ marginLeft: '20px' }}>
        <div className="eleven wide column">
          <VideoDetails
            video={this.state.selectedVideo}
            comments={this.state.comments}
          />
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
