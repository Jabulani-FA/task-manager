import React from 'react';
import { useState } from 'react';

const AddTask = ({onAdd}) => {
  const [task, settask] = useState('');
  const [day, setday] = useState('');
  const [time, settime] = useState('');

  const onTask = (e) => {
    e.preventDefault();
    if (!task) {
      alert('Please enter task')
      return
    }
    if (!day) {
      alert('Please day is important')
      return
    }
    if (!time) {
      alert('Please day is important')
      return
    }

    onAdd({task,day,time})
    settask('')
    setday('')
    settime('')
  }
  return <div className='Addtask'>
    <form onSubmit={onTask}>
      <input type='text' value={task} placeholder='Task name' onChange={(e) => {settask(e.target.value)}}/>
      <input type='date' value={day} placeholder='Task day' onChange={(e) => {setday(e.target.value)}}/>
      <input type='time' value={time} placeholder='Task time' onChange={(e) => {settime(e.target.value)}}/>
      <button>Add Task</button>
    </form>
  </div>;
};

export default AddTask;
