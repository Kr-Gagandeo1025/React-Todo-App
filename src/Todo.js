import { Button, Input, List, ListItem, ListItemIcon, ListItemText, Modal,} from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import React, { useState } from 'react'
import { DeleteForever, Notes } from '@mui/icons-material';
import db from './firebase';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: '10px',
    margin : '10px',
    borderRadius: '10px',
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);
  const updateTodo = () => {
    // updating the todos with new input text
    db.collection('todos').doc(props.todo.id).set({
      text : input
    }, {merge: true})
    setOpen(false);
  }
  return (
    <>
    <Modal open={open}
    onClose={e => setOpen(false)}>
      <div className={classes.paper}>
        <h5>Edit your Todo...</h5>
        <Input value={input} onChange={e => setInput(e.target.value)}></Input>
        <Button onClick={updateTodo} color='success'>Update Todo</Button>
        <Button onClick={e => setOpen(false)} color='error'>Cancel</Button>
      </div>
    </Modal>
    <List>
        <ListItem>
            <ListItemIcon>
                <Notes/>
            </ListItemIcon>
            <ListItemText primary="Todo" secondary={props.todo.todo}/>
            <Button onClick={e => setOpen(true)}>
              <DriveFileRenameOutlineIcon/>
            </Button>
            <Button onClick={event => {
              db.collection('todos').doc(props.todo.id).delete()
              }}>
                {/* this is the delete icon */}
              <DeleteForever/>
            </Button>
        </ListItem>
    </List>
    </>
  )
}

export default Todo