import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignupTypeModal.module.css';

export default function SignupTypeModal({ onClose }) {
  const navigate = useNavigate();

  const selectType = (type) => {
    onClose();
    navigate(`/signup/${type}`);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2 className={styles.header}>Choose Account Type</h2>
        <div className={styles.buttons}>
          <button onClick={() => selectType('customer')} className={styles.button}>
            Customer
          </button>
          <button onClick={() => selectType('supplier')} className={styles.button}>
            Supplier
          </button>
        </div>
        <button onClick={onClose} className={styles.close}>×</button>
      </div>
    </div>
  );
}
