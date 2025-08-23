'use client';

import React from 'react';
import { useToast } from '../hooks/use-toast';
import styles from './Toast.module.scss';

const Toast = () => {
  const { toasts, dismiss } = useToast();
  
  if (toasts.length === 0) return null;
  
  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toast}>
          <div className={styles.toastContent}>
            {toast.title && <div className={styles.toastTitle}>{toast.title}</div>}
            {toast.description && <div className={styles.toastDescription}>{toast.description}</div>}
          </div>
          <button 
            className={styles.toastClose}
            onClick={() => dismiss(toast.id)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
