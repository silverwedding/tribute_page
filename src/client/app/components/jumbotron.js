import React from 'react';
import Carousel from './carousel';

const Jumbotron = () => (
	<div className="jumbotron">
		<hr />
		<div className="row">
			<div className="col-xs-12">
				<h1 className="text-center">Ada Lovelace</h1>
				<h4 className="text-center">The first computer programmer</h4>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12">
        <Carousel />
      </div>
    </div>
	</div>
);

export default Jumbotron;