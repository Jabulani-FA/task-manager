import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import { useState } from 'react';
import Tasks from './Tasks';


function App() {
  const [tasks, setTasks] = useState([

  ]);
  
  const onClick = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const [addtask, setaddtask] = useState(true);
  
  const onAdd = (task) => {
    const lastelement = {...tasks[tasks.length-1]}
    const lastid = lastelement.id;
    var id = Number
    {tasks.length === 0? id=1: id=lastid+1}
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header onAdd={()=>{setaddtask(!addtask)}} showAdd={addtask} />
      {addtask? <AddTask onAdd={onAdd}/>:<p className='little'>click Add to add task</p>}
      {tasks.length > 0? <Tasks tasks={ tasks } onClick={onClick}/>:<p className='little'>Nothing Lined up in todo List !!!</p> }
    </div>
  );
}

export default App;
