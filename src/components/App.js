import '../css/style.css';
import React, { useState, useCallback } from 'react';
import Router from './Router';
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
  const [chats, setChats] = useState([
    { id: 'chat001', name: 'Александр' },
    { id: 'chat002', name: 'Владимир' },
    { id: 'chat003', name: 'Елена' }
  ])

  const [currentChat, setCurrentChat] = useState(chats[0]);

  const ChangeChat = (chat) => setCurrentChat(chat);

  const getIsChatExists = useCallback((chatId) => {
    return Boolean(chats.find((chat) => chat.id === chatId))
  }, [chats]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <React.Fragment>
          <header className="app__header header">
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li className="nav__item nav-item">
                  <Link className="nav-item__link link" to="/">Home page</Link>
                </li>
                <li className="nav__item nav-item">
                  <Link className="nav-item__link link" to="/chats">Chats</Link>
                </li>
                <li className="nav__item nav-item">
                  <Link className="nav-item__link link" to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Router
            chats={chats}
            currentChat={currentChat}
            ChangeChat={ChangeChat}
            getIsChatExists={getIsChatExists}
          />
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}