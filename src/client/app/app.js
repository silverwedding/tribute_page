import React from 'react';
import {render} from 'react-dom';
import Jumbotron from './components/jumbotron';
import Timeline from './components/timeline';
import './sass/style.scss';

const App = () => (
    <div>
      <div className="container">
        <Jumbotron />
        <Timeline />
      </div>
    </div>
);

render(<App />, document.getElementById('app'));
