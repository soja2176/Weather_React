import React from 'react'
import SearchBar from './SearchBar.jsx';
import sty from '../components/styles/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
    return (
    
    <div className={sty.Navcontainer}> 
    <Link to= '/' className={sty.Home}>
      <span>Home</span>
    </Link>
    <Link to = '/about' className={sty.About}>
     <span>About</span>
    </Link>
    <div className={sty.SearchBar}>
    <SearchBar onSearch={onSearch}/>
    </div>
    </div>
    );
  };
  
  export default Nav;