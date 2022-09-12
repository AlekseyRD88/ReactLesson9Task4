import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  keyId = uuidv1();
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