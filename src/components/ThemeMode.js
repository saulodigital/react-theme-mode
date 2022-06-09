import { useEffect, useState } from 'react';
import './ThemeMode.css';

const ThemeMode = () => {
  const [ theme, setTheme ] = useState('light');
  const [ mounted, setMounted ] = useState(false);
  const body = document.body.classList;
  const lightTheme = 'light';
  const darkTheme = 'dark';

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const switchTheme = () => {
    if (theme === 'light') {
      body.replace(lightTheme, darkTheme);
      setMode('dark');
    } else {
      body.replace(darkTheme, lightTheme);
      setMode('light');
    }
  };

  useEffect(() => {
    const matchMedia = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = window.localStorage.getItem('theme');

    if (matchMedia && !localTheme) {
      setMode('dark');
      body.add(darkTheme);
    } else {
      if (localTheme) {
        setMode(localTheme);
        body.add(localTheme);
      } else {
        setMode('light');
        body.add(lightTheme);
      }
    }

    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    [theme, switchTheme, mounted],
    <button onClick={() => switchTheme()}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z"/>
      </svg>
    </button>
  );
};

export default ThemeMode;
