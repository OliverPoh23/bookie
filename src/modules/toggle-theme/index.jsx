import React from 'react';
// UI
import ToggleSwitch from 'components/toggle-switch';
import Typography from 'components/typography';
// Styles
import './styles.sass';
import { useTheme } from 'context/theme-context';

const ToggleTheme = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="toggle-theme">
      <ToggleSwitch onChange={toggleTheme} checked={dark} className="toggle-theme__switch" />
      <Typography component="span" variant="h6" className="user-dropdown-item__title">{dark ? 'Dark theme' : 'Light theme'}</Typography>
    </div>
  );
};

export default ToggleTheme;
