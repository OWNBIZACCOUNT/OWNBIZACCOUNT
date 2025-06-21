// src/pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://paraagenterprises.ownbizaccount.com/backend/home.php')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load home data', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.loading}>Loading…</div>;
  if (!data)   return <div className={styles.error}>Error loading data.</div>;

  return (
    <div className={styles.page}>
      <h1 className={styles.welcome}>{data.message}</h1>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <strong>{data.stats.stores}</strong>
          <span>Stores Launched</span>
        </div>
        <div className={styles.stat}>
          <strong>{data.stats.exams}</strong>
          <span>Live Exams</span>
        </div>
      </div>
    </div>
  );
}
