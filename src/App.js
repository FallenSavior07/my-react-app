
import logo from './logo.svg';
import './App.scss';
import './Message.scss';

const userName = "Ivan";

function Message(props) {
  return (
    <p className="Message">Hello, {props.text}!</p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={userName} />
      </header>
    </div>
  );
}

export default App;