import React from 'react';

const Header = ({showAdd,onAdd}) => {
  return( 
  <div className='header'>
      <h3>Welcome to Task Manager</h3>
      <button onClick={onAdd} style={showAdd ? {background:'red'}:{background:'green'}}> {showAdd? 'close':'Add'}</button>
  </div>);
};

export default Header;
