

import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { useEffect } from 'react'
import { Button, TextField } from '@mui/material'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

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
    <form onSubmit={onSubmitForm}>
      <TextField id="standard-helperText"
          label="Enter a Todo..."
          defaultValue="Enter a Todo..."
          helperText="Add Todo Items"
          variant="standard" type="text"
       value={input} required 
      onChange={onChangeInput} />
      <Button variant="contained" color="success" className='button-add' size="large" type="submit">
          {editTodo ? "Ok": "Add"}
      </Button>
    </form>
  )
}

export default Form