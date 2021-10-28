import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const[showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(([
    {
        id: 1,
        text: 'First ',
        day: 'Feb 6th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Second',
        day: 'Feb 6th at 2:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Third',
        day: 'Feb 6th at 2:30pm',
        reminder: false
    }
]))

  //DELETE TASK

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle REMINDER
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)}
      showAdd ={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}


export default App;
