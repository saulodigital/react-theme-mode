import { useEffect, useState } from 'react';
import './ThemeMode.css';

const ThemeMode = () => {
  const [ theme, setTheme ] = useState();

  const localTheme = localStorage.getItem('theme');

  const preferTheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setMode = mode => {
    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    localTheme
      ? setMode(localTheme)
      : preferTheme ? setMode('dark') : setMode('light');
  }, [theme]);

  const switchTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  return (
    <button onClick={switchTheme}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z"/>
      </svg>
    </button>
  );
};

export default ThemeMode;