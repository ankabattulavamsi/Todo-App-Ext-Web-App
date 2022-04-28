import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4 } from 'uuid';

export default function EditForm({open, setOpen,input, setInput, todos, setTodos, editTodo, setEditTodo}) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeInput = (event) => {
    setInput(event.target.value)
}

useEffect(() => {
    if(editTodo) {
        setInput(editTodo.title)
    }else {
        setInput('')
    }
},[setInput, editTodo])

const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
    todo.id === id ? {title, id, completed} : todo 
    )
    setTodos(newTodo)
    setEditTodo('')
}

const onSubmitForm = event => {
    event.preventDefault()
    if(!editTodo) {
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
        setInput('')
    }
    else{
        updateTodo(input, editTodo.id, editTodo.completed)
    }
}

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Todo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Todo</DialogTitle>
        <form onSubmit={onSubmitForm}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
          label="Enter a Todo..."
          defaultValue="Enter a Todo..."
          helperText="Add Todo Items"
       value={input} required 
      onChange={onChangeInput}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button type="submit" >{editTodo ? "Ok": "Add"}</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
