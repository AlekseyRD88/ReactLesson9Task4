import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';


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
          usersList.map(User, index => (
            <User key={index} {...User}/>
          ))
        }
        </ul>
        </div>
      );
    }   
  }
  
export default UsersList;