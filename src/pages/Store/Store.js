import React, { useState } from 'react';
import styles from './Store.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Store() {
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    // TODO: wire up real search logic
    console.log('Searching for:', query);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Own Store</h1>

      <form className={styles.searchForm} onSubmit={handleSearch}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      <p className={styles.text}>
        Set up and manage your store inventory here.
      </p>
    </div>
  );
}
