import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';


class UsersList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      users: this.props.users,
    };
  }
  onChange = (event) => {
    this.setState({
      filterText: event.target.value,
      users: this.props.users.filter(user=> user.name.toLowerCase().includes(event.target.value.toLowerCase())),
    });
  }
    render() {
      return (
        <div>
        <Filter filterText={this.filterText} onChange={this.onChange} count={this.state.users.length}/>
        <ul className="users">
        {this.state.users.map((user, index) => (
            <User key={index} {...user}/>))}
        </ul>
        </div>
      );
    }   
}
  
export default UsersList;