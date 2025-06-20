import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginTypeModal from '../LoginTypeModal/LoginTypeModal';
import SignupTypeModal from '../SignupTypeModal/SignupTypeModal';
import { AuthContext } from '../../context/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal]     = useState(false);
  const [showSignupModal, setShowSignupModal]   = useState(false);
  const [isOpen, setIsOpen]                     = useState(false);
  const { isLoggedIn, logout }                  = useContext(AuthContext);

  const links = [
    { to: '/',          label: 'Home' },
    { to: '/store',     label: 'Own Store' },
    { to: '/live-exam', label: 'Live Exam' },
    { to: '/contact',   label: 'Contact' },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.gold}>OWN</span>
          <span className={styles.navy}>BIZACCOUNT</span>
        </div>

        <ul className={styles.menu}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={styles.link}>{label}</NavLink>
            </li>
          ))}

          {isLoggedIn ? (
            <li>
              <button onClick={logout} className={styles.link} style={{ background: 'none', border: 'none' }}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <a href="#" onClick={e => { e.preventDefault(); setShowLoginModal(true); }} className={styles.link}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" onClick={e => { e.preventDefault(); setShowSignupModal(true); }} className={styles.link}>
                  Signup
                </a>
              </li>
            </>
          )}
        </ul>

        <button className={styles.hamburger} onClick={() => setIsOpen(true)} aria-label="Open menu">
          <FaBars />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close menu">
          <FaTimes />
        </button>
        <ul className={styles.sidebarMenu}>
          {links.map(({ to, label }) => (
            <li key={to} onClick={() => setIsOpen(false)}>
              <NavLink to={to} className={styles.link}>{label}</NavLink>
            </li>
          ))}

          {isLoggedIn ? (
            <li onClick={() => { logout(); setIsOpen(false); }}>
              <span className={styles.link}>Logout</span>
            </li>
          ) : (
            <>
              <li onClick={() => { setShowLoginModal(true); setIsOpen(false); }}>
                <span className={styles.link}>Login</span>
              </li>
              <li onClick={() => { setShowSignupModal(true); setIsOpen(false); }}>
                <span className={styles.link}>Signup</span>
              </li>
            </>
          )}
        </ul>
      </div>

      {showLoginModal && <LoginTypeModal onClose={() => setShowLoginModal(false)} />}
      {showSignupModal && <SignupTypeModal onClose={() => setShowSignupModal(false)} />}
    </>
  );
}
