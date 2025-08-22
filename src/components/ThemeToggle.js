'use client';

import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const initialTheme = localStorage.getItem('theme') || 'light';
        
        const updateTheme = (isDark) => {
            setDarkMode(isDark);
            root.classList.remove(isDark ? 'light-mode' : 'dark-mode');
            root.classList.add(isDark ? 'dark-mode' : 'light-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        };

        // Set initial theme
        updateTheme(initialTheme === 'dark');

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                updateTheme(e.matches);
            }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const newDarkMode = !darkMode;
        
        root.classList.remove(newDarkMode ? 'light-mode' : 'dark-mode');
        root.classList.add(newDarkMode ? 'dark-mode' : 'light-mode');
        
        setDarkMode(newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? (
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                        fill="currentColor"
                        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
                    />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                        fill="currentColor"
                        d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;