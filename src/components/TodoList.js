import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const onClickComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    const onClickDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const onClickEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }
    
  return (
      <>
    <div>
      {todos.map((todo) => (
          <li className='list-item prop' key={todo.id}>
              <input type="text" value={todo.title} variant="standard" className={`list ${todo.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />
              <div>
                  <Button className='button-complete task-button' onClick={() => onClickComplete(todo)}>
                      <CheckCircleIcon />
                  </Button>
                  <Button className='button-edit task-button' color="secondary" onClick={() => onClickEdit(todo)}>
                        <EditIcon />
                  </Button>
                  <Button className='button-delete task-button' size="medium" color="error" onClick={() => onClickDelete(todo)}>
                      <DeleteForeverIcon />
                  </Button>
              </div>
          </li>
      ))}
    </div>
    </>
  )
}

export default TodoList
