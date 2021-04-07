import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


   useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  },[])


  useEffect(() => {
    setUsername(prompt('Enter your name'));
  }, [])
 
  const sendMessage = (event) => {
    event.preventDefault();
    window.scrollTo(0, 999999999999);

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  
  }

  return (
  <>
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username }</h2> 
    {/* message themselves */}
    <FlipMove>
      {
        messages.map((message) =>(
          
          <Message username={username} message={message}></Message>
          
        ))
      }
    </FlipMove>
    <FormControl className="down">
        <InputLabel >Send Message</InputLabel>
        <Input  value={input} onChange={ event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Mesaage</Button>

    </FormControl>  
    

    </div>
  
  </>
    
  );
}

export default App;
