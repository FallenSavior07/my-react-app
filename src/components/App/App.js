import '../../css/style.css';
import React from 'react';
import Router from '../Router';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#daa520",
    },
    secondary: {
      main: "#4caf50",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <header className="app__header header">
          <nav className="header__nav nav container">
            <ul className="nav__list">
              <li className="nav__item nav-item">
                <Link className="nav-item__link link" to="/">Домой</Link>
              </li>
              <li className="nav__item nav-item">
                <Link className="nav-item__link link" to="/chats">Чаты</Link>
              </li>
              <li className="nav__item nav-item">
                <Link className="nav-item__link link" to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Router />
      </div>
    </ThemeProvider>
  );
}