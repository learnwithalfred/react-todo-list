/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import TodoContainer from './components/TodoContainer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
