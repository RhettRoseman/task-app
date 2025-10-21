'use client'
import react from "react";
import { useState, useEffect } from "react";
import Footer from './footer';

export default function Tasks() {
    const [tasks, setTasks] = useState([]) //state to hold all tasks
    const [newTask, setNewTask] = useState("") //state to hold input field value 

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks")) || []; // Get tasks from localStorage
        setTasks(saved);  // Set tasks state with saved tasks
    }, []); // empty array = run only once

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))   // Save tasks to localStorage whenever tasks state changes

    }, [tasks]) // Runs every time tasks changes

    // function to add new task
    const addTask = () => {
        if (!newTask) return; // if no new task dont return anything
        setTasks([...tasks, { title: newTask, status: "Not Started" }]); //add new task to tasks array
        setNewTask('') // Clear input field
    };
    // function to delete task
    const deleteTask = (index) => {
        const updated = [...tasks]
        updated.splice(index, 1)
        setTasks(updated)
    };
    // function to change status
    const changeStatus = (index) => {
        const updatedTasks = [...tasks];
        const currentStatus = updatedTasks[index].status;
        if (currentStatus == 'Not Started') updatedTasks[index].status = 'In Progress'; 
        else if (currentStatus === 'In Progress') updatedTasks[index].status = 'Done';
        else updatedTasks[index].status = 'Not Started';

        setTasks(updatedTasks)    
    };
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-2'>Tasks</h2>
            <form className='flex mb-4'>
                {/* Input + button wrapper */}
                <input type='text'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add New Task"
                    className='border-white p-2 gex-grow mr-2 rounded' />
                <button onClick={()=> addTask()} className="bg-green-900 text-white">
                    Add Task
                </button>
            </form>
            {/* List of Task */}
            <ul >
                {tasks.map((task, index)=> (
                <li key={index} className="flex justify-between items-center border-b py-2">
                    <span>
                        {task.title} 
                    </span>
                    <button onClick={() => changeStatus(index)}>
                      :  {task.status}
                    </button>                   
                     <button onClick={()=> deleteTask(index)} className="bg-red-600">
                        Delete
                    </button>
                </li>
            ))}
                
            </ul>
            <div>
                <Footer/>
            </div>
        </div>
    )
} 