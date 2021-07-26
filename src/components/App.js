import '../css/style.css';
import React, { useState } from 'react';
import Chat from './Chat';
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
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

const exampleChats = [
  { id: 'chat001', name: 'Александр' },
  { id: 'chat002', name: 'Владимир' },
  { id: 'chat003', name: 'Елена' }
]

function App() {
  const [chats, setChats] = useState(exampleChats);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <div className="App__sidebar chats">
            <List className="chats-list">
              {chats.map((chat) => {
                return <ListItem
                  className="chats-list__item"
                  key={chat.id}
                  button
                >
                  {chat.name}
                </ListItem>
              })}
            </List>
          </div>
          <div className="App__main">
            <Chat className="chat" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;