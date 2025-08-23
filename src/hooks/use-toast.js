import { useState, useCallback, useEffect } from 'react';

// Simple toast state management
let toastState = {
  toasts: [],
  listeners: []
};

const addToast = (toast) => {
  const id = Date.now() + Math.random();
  const newToast = {
    id,
    title: toast.title || '',
    description: toast.description || '',
    ...toast
  };
  
  toastState.toasts.push(newToast);
  toastState.listeners.forEach(listener => listener([...toastState.toasts]));
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toastState.toasts = toastState.toasts.filter(t => t.id !== id);
    toastState.listeners.forEach(listener => listener([...toastState.toasts]));
  }, 3000);
};

const removeToast = (id) => {
  toastState.toasts = toastState.toasts.filter(t => t.id !== id);
  toastState.listeners.forEach(listener => listener([...toastState.toasts]));
};

export const useToast = () => {
  const [toasts, setToasts] = useState([...toastState.toasts]);
  
  // Subscribe to toast updates
  useEffect(() => {
    const listener = (newToasts) => setToasts(newToasts);
    toastState.listeners.push(listener);
    
    return () => {
      toastState.listeners = toastState.listeners.filter(l => l !== listener);
    };
  }, []);
  
  const toast = useCallback((toastData) => {
    addToast(toastData);
  }, []);
  
  const dismiss = useCallback((id) => {
    removeToast(id);
  }, []);
  
  return {
    toast,
    dismiss,
    toasts
  };
};
