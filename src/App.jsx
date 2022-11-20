import { useState ,useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import  Footer  from './components/Footer';
import  About from "./components/About"

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

    const getToggle = await fetchTask(id)
    const updTask= {...getToggle, reminder:!getToggle.reminder}

    const res= await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(updTask),
    })
   const data = await res.json()
    setTasks(tasks.map((task)=> task.id === id ? { ...task,  reminder: data.reminder}: task))
    console.log(id ,'so')

  }
   
  return (
<Router>
  <div className='container'>App
        <Header onAdd={()=>setShowAdd(!showAdd)}   show={showAdd}/>
        {showAdd &&<AddTask onAdd={addTask}/>}
  
        {tasks.length >0? (<Tasks tasks={tasks} onToggle=   {toggleReminder} onDelete={deleteTask}/>):("no more tasks out there")
   
     }<Routes>
      <Route path='./about ' component={About}/></Routes>
        <Footer/>
  </div>
</Router>
  )

  }

export default App