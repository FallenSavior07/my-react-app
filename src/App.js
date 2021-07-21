
import logo from './logo.svg';
import './css/style.css';
import React, { useCallback, useEffect, useState, } from 'react';
import MessageForm from './MessageForm';
import Chat from './Chat';

const userName = 'Вадим';
const robotMessage = `Привет, ${userName}! Как дела?`;

function App() {
  const [messageList, setMessageList] = useState([]);

  const updateMessageList = useCallback((message, userName) => {
    let currentDate = getDate();
    setMessageList([...messageList, { author: userName, text: message, date: currentDate },]);
  }, [messageList]);

  const getDate = () => {
    let currentDate = new Date().toLocaleDateString();
    let currentTime = new Date().toLocaleTimeString().slice(0, -3);
    return [currentDate, currentTime].join(", ");
  }

  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author === userName) {
        const timer = setTimeout(() => {
          updateMessageList(robotMessage, 'Робот Василий');
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [messageList, updateMessageList]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MessageForm updateMessageList={updateMessageList} />
        <Chat messages={messageList} />
      </header>
    </div>
  );
}

export default App;