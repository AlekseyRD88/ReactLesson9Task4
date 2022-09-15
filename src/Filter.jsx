import React from 'react';
const Filter = (props) => {
    const count = users.filter((user) => {
    if(props.filterText === '') {
      return null;
    } else if(user.includes(props.filterText)){
      return user;
    }
})
  
  return (
    <div className="filter">
    <span className="filter__count">{count.length}</span>
    <input type="text" className="filter__input" onChange={props.onChange} />
  </div>
  );
}


export default Filter;