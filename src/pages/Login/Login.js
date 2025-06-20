import React, { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.module.css';
import bg from '../../assets/images/login-bg.jpg';

export default function Login() {
  const { type } = useParams();
  const isSupplier = type === 'supplier';
  const title = isSupplier ? 'Supplier Login' : 'Customer Login';

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: perform real auth here...
    login();
    navigate('/');
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.logo}>
        <span className={styles.gold}>OWN</span>
        <span className={styles.navy}>BIZACCOUNT</span> 
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Phone Number
            <input className={styles.input} type="tel" required />
          </label>
          <label className={styles.label}>
            Password
            <input className={styles.input} type="password" required />
          </label>
          <button className={styles.button} type="submit">
            {title}
          </button>
        </form>
        <div className={styles.footer}>
          <span>{isSupplier ? 'Not a supplier?' : 'Not a customer?'}</span>
          <Link to="/signup" className={styles.toggleLink}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
