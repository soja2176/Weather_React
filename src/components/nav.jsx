import React from 'react'
import SearchBar from './SearchBar.jsx';
import sty from '../components/styles/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
    return (
    
    <div className={sty.Navcontainer}> 
    <Link to= '/about'>
      <span className={sty.About}>About</span>
    </Link>
    <Link to = '/'>
     <span className={sty.About}>Home</span>
    </Link>
    <div className={sty.SearchBar}>
    <SearchBar onSearch={onSearch}/>
    </div>
    </div>
    );
  };
  
  export default Nav;