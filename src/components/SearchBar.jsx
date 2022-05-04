import React from 'react';
// import Button from 'react-bootstrap/Button';
import styles from '../components/styles/searchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
const [city, setCity] = useState('');
  return (<div className={styles.container}>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input value={city} onChange={x => setCity(x.target.value)}
        type="text"
        placeholder="Ciudad..."
      />
      <input className={styles.btnSearch} type="submit" value="Agregar" />
    </form>
  </div>)
};
