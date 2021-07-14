
import logo from './logo.svg';
import './scss/style.scss';
import React, { useState } from 'react';

const userName = 'Александр';

function Message(props) {
  return (
    <p className="Message">Привет, {props.text}!</p>
  );
}

function MessageForm(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.target[0].value = '';
    event.preventDefault();
  }

  return (
    <form className="message-form" action="#" onSubmit={handleSubmit}>
      <input className="message-form__input" type="text" placeholder="Напишите сообщение..." onChange={handleChange}></input>
      <button className="message-form__button" type="submit" onClick={() => props.updateMessageList(value)}>
        <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" className="message-form__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
      </button>
    </form >
  );
}

function App() {
  const [messageList, setMessageList] = useState([]);

  const updateMessageList = (message) => {
    let arr = messageList.slice();
    let currentDate = getDate();
    arr.push({ author: userName, text: message, date: currentDate });
    setMessageList(arr);
  }

  const getDate = () => {
    let currentDate = new Date().toLocaleDateString();
    let currentTime = new Date().toLocaleTimeString().slice(0, -3);
    return [currentDate, currentTime].join(", ");
  }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Message text={userName} />
  //       <ul className="message-list">{messageList.map((message, i) => {
  //         return <li className="message-list__item" key={i}>
  //           <p></p>
  //           {message.text}, {message.author}, {message.time}, {message.date}
  //         </li>
  //       })}</ul>
  //       <MessageForm updateMessageList={updateMessageList} />
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={userName} />
        <table>
          <thead>
            <tr>
              <th>Сообщение</th>
              <th>Автор</th>
              <th>Дата и время отправки</th>
            </tr>
          </thead>
          <tbody>
            {messageList.map((message, i) => {
              return <tr className="message-list__item" key={i}>
                <td>{message.text}</td>
                <td>{message.author}</td>
                <td>{message.date}</td>
              </tr>
            })}
          </tbody>
        </table>
        <MessageForm updateMessageList={updateMessageList} />
      </header>
    </div>
  );
}

export default App;