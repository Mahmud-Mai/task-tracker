import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';


const App =() => {
  const [tasks, setTasks] = useState([
    {
        id: '001',
        text: 'Meeting at School',
        day: 'Nov 5th 2021',
        reminder: 'true'
    },
    {
        id: '002',
        text: 'Dentist"s appointment',
        day: 'Nov 2th 2021',
        reminder: 'false'
    },
    {
        id: '003',
        text: 'Shopping',
        day: 'Nov 2th 2021',
        reminder: 'false'
    },
  ])

  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setTasks ([...tasks, newTask ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
    console.log('deleted', id)
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  
  return (
    <div className="container">
      <Header onAddBtn={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} onAddBtn={()=> setShowAddTask(!showAddTask)} />}
      {
        tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleReminder }/>) :
          (<h3>No tasks to show. Please Add task</h3>)
      }
    </div>
  );
}

export default App;
