import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Task = ({ task,onClick }) => {
  return (
    <div className='TaskBox'>
        <div>
            <h4>{task.task}</h4>
            <FaTimes className='clearIcon' onClick={() => onClick(task.id)}/>
        </div>
            <p>By: {task.time} {task.day}</p>
    </div>);
};

export default Task;
