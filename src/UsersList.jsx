import React, { Component } from 'react';
import uuid from 'react-native-uuid'
import User from './User.jsx';
import Filter from './Filter.jsx';

let keyId = uuid.v1();
class UsersList extends Component {
  
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
            <User key={keyId} {...user}/>
          ))
        }
        </ul>
        </div>
      );
    }   
  }
  
export default UsersList;