import React from 'react';
import timeline from '../data/timeline.json';

const Events = () => {
  const timelineList = timeline.timeline.map((item, i) =>
		<li key={i} >{item}</li>
	);

  return (
		<ul id="events">
			{timelineList}
		</ul>
  );
};

export default Events;