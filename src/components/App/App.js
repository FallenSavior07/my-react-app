import '../../css/style.css';
import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Router from '../Router/Router';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeIsAuthed } from '../../actions/profile';
import clsx from 'clsx';

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
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.profile.isAuthed);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => dispatch(changeIsAuthed(Boolean(user))));
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <header className="app__header header">
          <nav className="header__nav nav container">
            <ul className="nav__list">
              <li className="nav__item nav-item">
                <Link className="nav-item__link link" to="/">Домой</Link>
              </li>
              <li className={clsx(isAuthed ? null : "hidden", "nav__item")}>
                <Link className="nav-item__link link" to="/chats">Чаты</Link>
              </li>
              <li className="nav__item nav-item">
                <Link className="nav-item__link link" to="/gists">Gists</Link>
              </li>
              <li className={clsx(isAuthed ? null : "hidden", "nav__item")}>
                <Link className="nav-item__link link" to="/profile">Профиль</Link>
              </li>
              <li className={clsx(isAuthed ? "hidden" : null, "nav__item")}>
                <Link className="nav-item__link link" to="/signup">Регистрация</Link>
              </li>
              <li className={clsx(isAuthed ? "hidden" : null, "nav__item")}>
                <Link className="nav-item__link link" to="/login">Войти в аккаунт</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Router />
      </div>
    </ThemeProvider>
  );
}