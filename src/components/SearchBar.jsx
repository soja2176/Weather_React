import React from 'react';
// import Button from 'react-bootstrap/Button';
import styles from '../components/styles/searchBar.module.css'

export default function SearchBar({onSearch}) {

  return (<div className={styles.container}>
    <input type={"text"} placeholder={"Que ciudad?"}/>
    {/* <Button variant={"outline-warning"}>Warning</Button> Bootstrap form styles */}
    <button className={styles.btnSearch} onClick={() => onSearch('Una Ciudad')}>Agregar</button>
  </div>)
};
