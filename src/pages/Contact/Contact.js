import React from 'react';
import styles from './Contact.module.css';
import banner from '../../assets/images/contact-banner.jpg';
import { FaFacebookF } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Banner Image */}
      <img src={banner} alt="Contact Us" className={styles.banner} />

      {/* Details Card */}
      <div className={styles.details}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.text}>
          We’d love to hear from you. Here’s how you can reach us:
        </p>
        <p><strong>Email:</strong> support@ownbizaccount.com</p>
        <p><strong>Address:</strong> 123 Business St, Metropolis, Country</p>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Hours:</strong> Mon – Fri, 9 AM – 6 PM</p>
      </div>


    </div>
  );
}

    //   {/* Social Links */}
    //   <div className={styles.social}>
    //     <a
    //       href="https://facebook.com/YourPage"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       aria-label="Facebook"
    //     >
    //       <FaFacebookF className={styles.facebookIcon} />
    //     </a>
    //   </div>