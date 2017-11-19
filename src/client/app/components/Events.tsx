import * as React from 'react';

const timeline = require('../data/timeline.json');

const Timeline = () => {
  const timelineList = timeline.timeline.map((item, i) =>
      <li key={i} >{item}</li>,
  );

  return (
      <ul id="events">
          {timelineList}
      </ul>
  );
};

export default Timeline;
