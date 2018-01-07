import React from 'react';

const Header = ({title, mantra}) => {
  return (
  <div className='header' >
    <h1 className='title' >{title}</h1>
    <h2 className='mantra' >{mantra}</h2>
  </div>
  )
}

export default Header;