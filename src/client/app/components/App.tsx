import * as React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import '../sass/style.scss';

const App = () => (
    <div>
      <div className="container">
        <Header />
        <Timeline />
      </div>
    </div>
);

export default App;
