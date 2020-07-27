import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  hot: {
    text: 'Beach Party!',
    iconName: 'sun',
    iconColor: 'red',
  },
  cold: {
    text: 'Its cold m8! Take a coat or someting!',
    iconName: 'snowflake',
    iconColor: 'blue',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'hot' : 'cold';
  } else {
    return lat > 0 ? 'cold' : 'hot';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, iconColor } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconColor} massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconColor} massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
