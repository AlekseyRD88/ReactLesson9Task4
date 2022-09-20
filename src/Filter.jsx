import React from 'react';
const Filter = (props) => {
      const count = props.users.filter((user) => user.includes(props.filterText));
  return (
    <div className="filter">
    <span className="filter__count">{count.length}</span>
    <input type="text" className="filter__input" onChange={props.onChange} />
  </div>
  );
}


export default Filter;