import React from 'react'
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
// import {faTrash} from '@fortawesome/free-solid-svg-icons';

function Todo({task, deleteTodo, editTodo, toggleComplete}) {
  return (
    <div className="Todo">
      < p className={`${task.completed ? "completed" : "incompleted"}`}
      onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <span>
        <FaPenToSquare  className="edit-icon" onClick={()=> editTodo(task.id)}/>
        <FaRegTrashAlt className="delete-icon"onClick={()=>deleteTodo(task.id) }/>
      </span>
    </div>
  )
}

export default Todo