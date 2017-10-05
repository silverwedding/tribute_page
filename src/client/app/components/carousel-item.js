import React from 'react';

const CarouselItem = (props) => (
	<div className={'item ' + props.active}>
		<hr />
    <img src={props.src} alt={props.alt} className="thumbnail" />
    <hr />
    <div className="carousel-caption">
      <h4>{props.caption}</h4>
    </div>
	</div>
);

export default CarouselItem;
