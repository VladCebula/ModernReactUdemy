//import the react and react dom lib
import React from 'react';
import ReactDOM from 'react-dom';

//create react component
const Time = () => {
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  return (
    <div>
      <label>Time</label>
      <h3>{getCurrentTime()}</h3>
    </div>
  );
};
const App = () => {
  const buttonText = { text: 'click me!' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
      <Time />
    </div>
  );
};

//take the react component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));
