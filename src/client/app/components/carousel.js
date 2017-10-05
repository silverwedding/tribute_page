import React from 'react';
import CarouselIndicators from './carousel-indicators';
import CarouselInner from './carousel-inner';

const Carousel = () => (
	<div className="row">
    <div className="col-xs-12">
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
				<CarouselIndicators />
				<CarouselInner />
			</div>
		</div>
	</div>
);

export default Carousel;
