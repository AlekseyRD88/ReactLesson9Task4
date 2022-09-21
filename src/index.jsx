import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';
/*import userArray from './userArray.js';*/
let userArray = [
  {
    name: 'Pat',
    age: 23
  },
  {
    name: 'John',
    age: 50
  },
  {
    name: 'David', 
    age: 35
  }
]

const rootElement = document.querySelector('#root');
ReactDOM.render(<UsersList users={userArray}/>, rootElement);