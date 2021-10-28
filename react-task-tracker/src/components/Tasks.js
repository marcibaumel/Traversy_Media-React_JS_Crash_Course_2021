import { useState } from "react"

const Tasks = () => {
    
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

    return (
       <>
        {tasks.map((tasks) => (<h3 key={tasks.id}>{tasks.text}</h3>))}
       </>
    )
}


export default Tasks