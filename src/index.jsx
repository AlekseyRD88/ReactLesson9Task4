import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';
import UserArray from './UserArray.jsx'

const rootElement = document.querySelector('#root');
ReactDOM.render(<UsersList users={UserArray}/>, rootElement);