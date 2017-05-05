import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/Welcome';
import Clock from './components/Clock';
import './index.css';

  const element = (
    <div>
      <h1>Hello World!</h1>
      
      <Welcome name="Martin" />
      <Welcome name="Masa" />
      <Welcome />

      <Clock />
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
