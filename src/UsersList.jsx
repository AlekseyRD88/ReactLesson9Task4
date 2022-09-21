import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';


class UsersList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      users: this.props.users.slice(),
      count: 0,
    };
  }
  onChange = (event) => {
    this.setState({
      filterText: event.target.value,
      users: this.props.users.filter(user=> user.name.toLowerCase().includes(text.target.value.toLowerCase())),
      count: this.state.users.length,
    });
  }
    render() {
      return (
        <div>
        <Filter users={this.users} filterText={this.filterText} onChange={this.onChange}/>
        <ul className="users">
        {this.state.users.map((user, index) => (
            <User key={index} {...user}/>))}
        </ul>
        </div>
      );
    }   
}
  
export default UsersList;