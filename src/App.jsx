import React from 'react'
import { useState } from 'react';
import Header from "./components/Header"
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAdd, setShowAdd]= useState(false)
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
//  add Task
const addTask = (task)=> {
  const id = Math.floor(Math.random() *1000)+1
  console.log(id)
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}
//  delete task
   const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id!==id))
    console.log('delete', id)
   }
  //  ontoggleReminder

  const toggleReminder =(id)=>{

    setTasks(tasks.map((task)=> task.id === id ? { ...task,  reminder: !task.reminder}: task))
    console.log(id ,'so')

  }
   
  return (
    <div className='container'>App
  <Header onAdd={()=>setShowAdd(!showAdd)}/>
  {showAdd &&<AddTask onAdd={addTask}/>}
  
   {tasks.length >0? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>):("no more tasks out there")
   
  }
    </div>
  )

  }

export default App