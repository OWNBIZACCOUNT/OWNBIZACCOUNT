import React from 'react';
import { FaStore, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import styles from './Home.module.css';
import heroBg from '../../assets/images/hero-bg.jpg';

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Empower Your Business Journey
          </h1>
          <p className={styles.heroSubtitle}>
            OwnBizAccount unifies store management, exam scheduling, analytics,
            and more—so you can focus on growth.
          </p>
          <div className={styles.cta}>
            <button className={styles.btnPrimary}>
              Get Started
            </button>
            <button className={styles.btnSecondary}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Our Features</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <FaStore className={styles.icon} />
            <h3>Own Store</h3>
            <p>List products, track inventory, and process orders all in one place.</p>
          </div>
          <div className={styles.card}>
            <FaCalendarAlt className={styles.icon} />
            <h3>Live Exam</h3>
            <p>Schedule and conduct secure exams with real-time monitoring.</p>
          </div>
          <div className={styles.card}>
            <FaChartLine className={styles.icon} />
            <h3>Analytics</h3>
            <p>Get insights on sales, exam performance, and customer behavior.</p>
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section className={styles.stats}>
        <div className={styles.stat}>
          <h3>500+</h3>
          <p>Stores Launched</p>
        </div>
        <div className={styles.stat}>
          <h3>1K+</h3>
          <p>Live Exams Conducted</p>
        </div>
        <div className={styles.stat}>
          <h3>99.9%</h3>
          <p>Uptime Guarantee</p>
        </div>
      </section>

    </div>
  );
}
