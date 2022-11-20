import React from 'react'
import { useState } from 'react';
import Header from "./components/Header"
import Tasks from './components/Tasks';


const App = () => {
 const [tasks,setTasks] = useState(
  [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:28pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at the School',
      day: 'Feb 6th at 3:28pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 7th at 9:28pm',
      reminder: false,
    },
    
  ]
 )
//  delete task
   const deleteTask = (id)=>{
    setTasks(tasks.reduce((task)=> task.id!==id))
    console.log('delete', id)
   }
  //  ontoggleReminder

  const toggleReminder =(id)=>{

    setTasks(tasks.map((task)=> task.id === id ? { ...task,  reminder: !task.reminder}: task))
    console.log(id ,'so')

  }
   
  return (
    <div className='container'>App
  <Header />
  {tasks.length > 0 ? (
   <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
   ):(
  'No tasks To show'
  )}

    </div>
  )
}


export default App