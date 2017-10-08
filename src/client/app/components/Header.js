import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Gallery from './Gallery';

const Header = () => (
	<Jumbotron>
		<hr />
		<div className="row">
			<div className="col-xs-12">
				<h1 className="text-center">Ada Lovelace</h1>
				<h4 className="text-center">The first computer programmer</h4>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12">
        <Gallery />
      </div>
    </div>
  </Jumbotron>
);

export default Header;