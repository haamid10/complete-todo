import React from 'react'
import { useState ,useEffect } from 'react';
import Header from "./components/Header"
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAdd, setShowAdd]= useState(false)
 const [tasks,setTasks] = useState([])

 useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  } 
  getTasks()
 },[])

//  fetch Tasks
const fetchTasks =async()=>{
  const res= await fetch('http://localhost:5000/tasks/')
  const data = await res.json()

  console.log(data)
  return data
}
//  add Task
const addTask =async (task)=> {

  const res = await fetch('http://localhost:5000/tasks/',{
    method: 'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify(task),
  })
     
    const data = await res.json()

    setTasks([...tasks,data])
  // const id = Math.floor(Math.random() *1000)+1
  // console.log(id)
  // const newTask = {id,...task}
  // setTasks([...tasks,newTask])
}
//  delete task
   const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((task)=> task.id!==id))
    console.log('delete', id)
   }
  //  ontoggleReminder
  const fetchTask =async(id)=>{
    const res= await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
  
    console.log(data)
    return data
  }

  const toggleReminder =async(id)=>{

    const getTogle = await fetchTask(id)

    setTasks(tasks.map((task)=> task.id === id ? { ...task,  reminder: !task.reminder}: task))
    console.log(id ,'so')

  }
   
  return (
    <div className='container'>App
  <Header onAdd={()=>setShowAdd(!showAdd)}   show={showAdd}/>
  {showAdd &&<AddTask onAdd={addTask}/>}
  
   {tasks.length >0? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>):("no more tasks out there")
   
  }
    </div>
  )

  }

export default App