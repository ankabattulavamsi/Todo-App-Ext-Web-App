import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

import './App.css'
import EditForm from './components/EditForm'

const App = () => {
  const inititalState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(inititalState)
  const [editTodo, setEditTodo] = useState(null)
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='container'>
      <div className='app-container'>
        <div>
        <Header />
        </div>
        <div>
          <Form input={input} 
          setInput={setInput} 
          todos={todos} 
          setTodos={setTodos} 
          editTodo={editTodo}
          setEditTodo={setEditTodo} />
        </div>
        <TodoList todos={todos}
         setTodos={setTodos} 
         setEditTodo={setEditTodo} />
         <EditForm open={open} setOpen={setOpen} input={input} 
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}  />
      </div>
    </div>
  )
}

export default App