import React, { Component } from 'react';
import nextId from "react-id-generator";
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  keyId = nextId();
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }
  
    render() {
      let usersList;



      return (
        <div>
        <Filter />
        <ul className="users">
        {
          usersList.map(user => (
            <User key={this.keyId} {...user}/>
          ))
        }
        </ul>
        </div>
      );
    }   
  }
  
export default UsersList;