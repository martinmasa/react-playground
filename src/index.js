import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/Welcome';
import Clock from './components/Clock';
import Counter from './components/Counter';

import registerServiceWorker from './registerServiceWorker';

import 'milligram';

import './index.css';

const element = (
  <div className="container">
    <h1>Hello World!</h1>
    <hr />
    
    <Welcome />
    <Welcome name="Martin" />
    <Welcome name="Masa" />
    <hr />

    <Clock />
    <hr />

    <Counter />
    <Counter step={3}/>
    <hr />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

registerServiceWorker();
