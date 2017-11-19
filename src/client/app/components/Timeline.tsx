import * as React from 'react';
import Events from './Events';

const Timeline = () => (
  <div className="row timeline">
    <div className="col-xs-12">
      <h2 className="text-center">A time line of Ada Lovelace's life</h2>
      <hr />
      <Events />
      <hr />
      <blockquote>
        <i className="fa fa-quote-left"/>
        [The Analytical Engine] might act upon other things besides number, were objects found whose mutual fundamental
        relations could be expressed by those of the abstract science of operations, and which should be also
        susceptible of adaptations to the action of the operating notation and mechanism of the engine...
        <i className="fa fa-quote-right"/>
      </blockquote>
      <blockquote>
        <i className="fa fa-quote-left"/>
        Supposing, for instance, that the fundamental relations of pitched sounds in the science of harmony and of
        musical composition were susceptible of such expression and adaptations, the engine might compose elaborate
        and scientific pieces of music of any degree of complexity or extent.
        <i className="fa fa-quote-right"/>
      </blockquote>
      <hr />
      <h3 className="text-center">
        Read more about Ada Lovelace &nbsp;
        <a
          className="btn btn-primary"
          href="https://en.wikipedia.org/wiki/Ada_Lovelace"
          role="button"
          target="_blank">Here</a>
      </h3>
      <hr />
    </div>
  </div>
);

export default Timeline;
