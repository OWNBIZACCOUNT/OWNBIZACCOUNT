// src/pages/Signup/Signup.js

import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import LoginTypeModal from '../../components/LoginTypeModal/LoginTypeModal';
import styles from './Signup.module.css';
import bg from '../../assets/images/signup-bg.jpg';

export default function Signup() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { type } = useParams();
  const isSupplier = type === 'supplier';
  const title = isSupplier ? 'Supplier Sign Up' : 'Customer Sign Up';

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: handle real signup logic...
    login();
    navigate('/');
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay} />

      {/* Logo */}
      <div className={styles.logo}>
        <span className={styles.gold}>OWN</span>
        <span className={styles.navy}>BIZACCOUNT</span>
      </div>

      {/* Form Card */}
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Username
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your username"
              required
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className={styles.label}>
            Phone Number
            <input
              className={styles.input}
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              placeholder="Create a password"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            {title}
          </button>
        </form>

        {/* Footer with Login trigger */}
        <div className={styles.footer}>
          <span>Already have an account?</span>
          <a
            href="#"
            className={styles.toggleLink}
            onClick={e => {
              e.preventDefault();
              setShowLoginModal(true);
            }}
          >
            Log In
          </a>
        </div>
      </div>

      {/* Login Type Selection Modal */}
      {showLoginModal && (
        <LoginTypeModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}
