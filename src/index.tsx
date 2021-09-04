import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './pages/pokedex/Pokedex';

ReactDOM.render(
  <React.StrictMode>
    <Pokedex mode={'cached'} />
  </React.StrictMode>,
  document.getElementById('root')
);
