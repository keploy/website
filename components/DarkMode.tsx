"use client"; // Ensure this is at the top

import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <div className="flex items-center bg-slate-100 dark:bg-black justify-center p-4">
      <DarkModeSwitch
        style={{
          marginBottom: '1',
          backgroundColor: darkMode ? '#0c0c0c' : '#F2613F',
          border: `2px solid ${darkMode ? '#F2613F' : '#F2613F'}`,
          borderRadius: '9999px',
          padding: '1px',
        }}
        checked={darkMode}
        onChange={toggleDarkMode}
        size={35}
        sunColor={darkMode ? '#FFDE4D' : '#FFDE4D'} // Changed to a darker yellow

        moonColor={darkMode ? '#FFD700' : '#F2613F'}
      />
    </div>
  );
};

export default DarkModeToggle;
