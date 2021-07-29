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
    { id: 'chat1', name: 'Александр' },
    { id: 'chat2', name: 'Владимир' },
    { id: 'chat3', name: 'Елена' }
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);

  const changeChat = (chat) => setCurrentChat(chat);

  const generateId = () => {
    let num = Math.floor(Math.random() * 999);
    let id = '';
    chats.forEach((message) => {
      if (message.id !== `chat${num}`) {
        id = `chat${num}`;
      } else {
        generateId();
      }
    })
    return id
  };

  const getIsChatExists = useCallback((chatId) => {
    return Boolean(chats.find((chat) => chat.id === chatId))
  }, [chats]);

  const onAddChat = (userName, value) => {
    setChats((currentChats) => [
      ...currentChats,
      { name: userName, id: `${generateId()}` },
    ])
  }

  const onRemoveChat = (chatId) => {
    setChats((currentChats) =>
      currentChats.filter((chat) => chat.id !== chatId)
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
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
          changeChat={changeChat}
          getIsChatExists={getIsChatExists}
          onAddChat={onAddChat}
          onRemoveChat={onRemoveChat}
        />
      </div>
    </ThemeProvider>
  );
}