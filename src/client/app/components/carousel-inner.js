import React from 'react';
import CarouselItem from './carousel-item';
import images from '../data/images.json';

const CarouselInner = () => {
  const carouselItems = images.images.map((item, i) =>
		<CarouselItem
			key={i}
			src={item.src}
			alt={item.alt}
			caption={item.caption}
			active={(i === 0 ? 'active' : '')}
		/>
	);

  return (
		<div className="carousel-inner" role="listbox">
			{carouselItems}
		</div>
  );
};

export default CarouselInner;