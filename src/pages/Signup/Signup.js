import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SignupTypeModal from '../../components/SignupTypeModal/SignupTypeModal';
import styles from './Signup.module.css';
import bg from '../../assets/images/signup-bg.jpg';

export default function Signup() {
  const { type } = useParams();
  const isSupplier = type === 'supplier';
  const title = isSupplier ? 'Supplier Sign Up' : 'Customer Sign Up';

  const [showModal, setShowModal] = useState(false);
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // after successful signup...
    login();
    navigate('/');
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.overlay} />

      <div className={styles.logo}>
        <span className={styles.gold}>OWN</span>
        <span className={styles.navy}>BIZACCOUNT</span>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Username
            <input className={styles.input} type="text" required />
          </label>
          <label className={styles.label}>
            Email
            <input className={styles.input} type="email" required />
          </label>
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
          <span>Already have an account?</span>
          <a
            href="#"
            className={styles.toggleLink}
            onClick={e => { e.preventDefault(); setShowModal(true); }}
          >
            Log In
          </a>
        </div>
      </div>

      {showModal && <SignupTypeModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
