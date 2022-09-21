import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';
import userArray from './userArray.js'

const rootElement = document.querySelector('#root');
ReactDOM.render(<UsersList users={userArray}/>, rootElement);