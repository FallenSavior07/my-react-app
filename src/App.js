import './css/style.css';
import React, { useState } from 'react';
import Chat from './Chat';
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";


// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: 'red',
//     color: props => props.color,
//   },
// });

const exampleChats = [
  { id: 'chat001', name: 'Александр' },
  { id: 'chat002', name: 'Владимир' },
  { id: 'chat003', name: 'Елена' }
]

function App() {
  const [chats, setChats] = useState(exampleChats);

  return (
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
  );
}

export default App;