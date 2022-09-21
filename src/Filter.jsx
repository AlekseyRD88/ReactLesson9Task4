import React from 'react';

const Filter = ({users, filterText, onChange}) => {
  const count = users.filter((user) => user.includes(filterText));
  return (
    <div className="filter">
    <span className="filter__count">{count.length}</span>
    <input type="text" className="filter__input" onChange={onChange} />
  </div>
  );
}


export default Filter;