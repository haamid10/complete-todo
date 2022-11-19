

const Tasks = ({tasks}) => {
  return (
    <div>
      {tasks.map((task)=><h3>{task.id}</h3>)}
    </div>
  )
}

export default Tasks
