import * as React from 'react';
import { Carousel } from 'react-bootstrap';

const images = require('../data/images.json');

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  private handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  public render() {
    const carouselItems = images.images.map((item, i) =>
      (
        <Carousel.Item key={i}>
          <img src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ),
    );

    return (
      <div className="row">
        <div className="col-xs-12">
          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}
          >
            {carouselItems}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Gallery;
