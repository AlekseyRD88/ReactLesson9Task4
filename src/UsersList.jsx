import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';


class UsersList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      users: [],
    };
  }
  onChange = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }
    render() {
      return (
        <div>
        <Filter />
        <ul className="users">
        {this.state.users.map((user, index) => (
            <User key={index} {...user}/>))}
        </ul>
        </div>
      );
    }   
}
  
export default UsersList;