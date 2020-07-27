import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const errorHandling =
      this.state.errorMessage === '' ? (
        !this.state.lat ? (
          <Spinner text="Hello! Where are you?" />
        ) : (
          <SeasonDisplay lat={this.state.lat} />
        )
      ) : (
        <div>Error: {this.state.errorMessage}</div>
      );
    return <div>{errorHandling}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
