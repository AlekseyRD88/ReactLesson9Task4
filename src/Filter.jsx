import React, { Component } from 'react';
class Filter extends Component {
  onChange = event => {
    this.setState({
      filterText: event.target.value,
    })
  }
  render() {
    const users = this.state.users.filter((user) => {
      if(this.state.filterText === '') {
        return user;
      } else if(user.includes(this.state.filterText)){
        return user;
      }
    })

  return (
    <div className="filter">
    <span className="filter__count">{users.length}</span>
    <input type="text" className="filter__input" onChange={this.onChange} />
  </div>
  );
  }
}

export default Filter;