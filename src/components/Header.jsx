import React from 'react';
import './styles/Header.css';

const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

export default Header