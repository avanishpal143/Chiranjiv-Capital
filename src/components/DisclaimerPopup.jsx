import React, { useState, useEffect } from 'react';
import styles from './DisclaimerPopup.module.css';

export default function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show popup every visit (or use sessionStorage to show once per session)
    const dismissed = sessionStorage.getItem('disclaimer_dismissed');
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('disclaimer_dismissed', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className={styles.popup}>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close disclaimer"
        >
          ×
        </button>
        <p className={styles.text}>
          We would like to inform you that we are currently not a Merchant Banker registered
          with SEBI. However, we have submitted our application and are in the process of
          obtaining the registration.
        </p>
      </div>
    </div>
  );
}
