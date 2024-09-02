import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="primary"
        />
      }
      label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{ margin: '10px' }}
    />
  );
};

export default ThemeToggleButton;