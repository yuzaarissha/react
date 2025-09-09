import { useState, useEffect } from "react"
import './index.css'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [warned, setWarned] = useState(false)

    const addTask = () => {
        const value = input.trim()
        if (!value) return
        setTasks(prev => [...prev, value])
        setInput("")
    }

    useEffect(() => {
        if (tasks.length > 10 && !warned) {
            alert('You have more than 10 jobs to do')
            setWarned(true)
        }
        if (tasks.length <= 10 && warned) {
            setWarned(false)
        }
    }, [tasks, warned])

    const onKeyDown = (e) => {
        if (e.key === 'Enter') addTask()
    }

    return (
        <div className="todo">
            <h1>ToDo List</h1>
            <div className="controls">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Enter task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="list">
                {tasks.map((task, index) => (
                    <li className="item" key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList