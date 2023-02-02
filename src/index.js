import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from './components/App';
//import { TrafficLight } from './components/TrafficLight';
//import { Form } from './components/Form'
import { TodoList } from './components/TodoList';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

