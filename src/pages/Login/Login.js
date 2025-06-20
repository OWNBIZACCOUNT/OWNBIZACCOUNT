// src/pages/Login/Login.js

import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SignupTypeModal from '../../components/SignupTypeModal/SignupTypeModal';
import styles from './Login.module.css';
import bg from '../../assets/images/login-bg.jpg';

export default function Login() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { type } = useParams();
  const isSupplier = type === 'supplier';
  const title = isSupplier ? 'Supplier Login' : 'Customer Login';

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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
              placeholder="Enter your password"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            {title}
          </button>
        </form>

        {/* Footer with Sign Up trigger */}
        <div className={styles.footer}>
          <span>
            {isSupplier
              ? 'Not a supplier?'
              : 'Not a customer?'}
          </span>
          <a
            href="#"
            className={styles.toggleLink}
            onClick={(e) => {
              e.preventDefault();
              setShowSignupModal(true);
            }}
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Signup Type Selection Modal */}
      {showSignupModal && (
        <SignupTypeModal onClose={() => setShowSignupModal(false)} />
      )}
    </div>
  );
}
