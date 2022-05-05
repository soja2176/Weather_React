import React from 'react'
import SearchBar from './SearchBar.jsx';
import sty from '../components/styles/Nav.module.css';

function Nav({onSearch}) {
    return (
    <nav className={sty.Navcontainer}>  
      <SearchBar onSearch={onSearch}/>
      </nav>
     
    );
  };
  
  export default Nav;