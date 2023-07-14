import { useEffect, useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  // when the app loads we need to fetch data from the database
  useEffect(()=>{
    // this runs every time app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().text));
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo:doc.data().text})))
    })
  },[]);

  const addTodos = (event) => {
    // runs when button add todo is clicked
    event.preventDefault();//stops from refreshing on form submit
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log('📝','note added');
    // setTodos([...todos, input]);
    setInput('');//clearing the input after submit
  }

  return (
    <div className="App">
      <h1>Hello World❤️</h1>
      <form>
        <TextField id="outlined-basic" label="Write a Todo" variant="outlined" value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} type='submit' onClick={addTodos} variant="contained">ADD TODO</Button>
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
