import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter, 
  Link, 
  Route
} from 'react-router-dom';

import Welcome from './components/Welcome';
import Clock from './components/Clock';
import Counter from './components/Counter';
import TicTacToe from './components/TicTacToe';
import FileUpload from './components/FileUpload';

import registerServiceWorker from './registerServiceWorker';

import 'milligram';

import './index.css';

const myComponents = [
  'Welcome',
  'Clock',
  'Counter',
  'TicTacToe',
  'FileUpload'
];

const Sidebar = () => {
  return (
    <aside className="column column-20">
      <ul>
        {myComponents.map((component) => (
          <li>
            <Link to={`/c/${component}`}>{component}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
};

const Main = () => {
  return (
    <main className="column column-50">

      <Route path="/c/Welcome" render={() => (
        <section>
          <h1>Hello World!</h1>
          <hr />
          
          <Welcome />
          <Welcome name="Martin" />
          <Welcome name="Masa" />
          <hr />
        </section>
      )} />

      <Route path="/c/Clock" component={Clock} />
      
      <Route path="/c/Counter" render={() => (
        <section>
          <h3>Counter</h3>
          <Counter />
          <Counter step={3}/>
        </section>
      )} />

      <Route path="/c/TicTacToe" component={TicTacToe} />
      <Route path="/c/FileUPload" component={FileUpload} />
    </main>
  )
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </BrowserRouter>
)};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
