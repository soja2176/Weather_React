import React from 'react';
import styles from '../components/styles/searchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

const [city, setCity] = useState('')

const handleInputChange = (x) => {
  x.preventDefault()
  setCity(x.target.value)
}
  return (<div className={styles.container}>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input value={city} onChange={(x) => handleInputChange(x)}
        type="text"
        placeholder="Ciudad..."
      />
      <input className={styles.btnSearch} type="submit" value="Buscar" />
    </form>
  </div>)
};
