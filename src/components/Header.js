import React from 'react';

const Header = ({title, mantra}) => {
  return (
  <div className='header' >
    <div className='title' >
      <img src='../faces-white.png' alt={title}/>
      <h1>{title}</h1>
    </div>
    <h2 className='mantra' >{mantra}</h2>
  </div>
  )
}

export default Header;