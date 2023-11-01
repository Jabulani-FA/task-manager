import React from 'react';
import Task from './Task';

const Tasks = ({ tasks,onClick }) => {
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onClick={onClick} />
        ))}
    </>);
};

export default Tasks;
