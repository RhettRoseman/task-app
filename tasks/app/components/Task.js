'use client'
import React, { useState, useEffect } from "react"
import Footer from "./footer"

export default function TaskBE(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            fetchTasks()
        }
    }, [mounted]);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8000/tasks')
        const data = await res.json()
        setTasks(data)
    };
    
    const addTask = async () => {
        if (!newTask.trim()) return;
        await fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content: newTask})
        })
        setNewTask('')
        fetchTasks()
    }; 

    const deleteTask = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}`, {
            method: 'DELETE'
        })
        fetchTasks()
    };

    const toggleTask = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}/toggle`, {
            method: 'PATCH'
        })
        fetchTasks()
    };

    if (!mounted) return null

    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-2'>Tasks</h2>
            <form className='flex mb-4' onSubmit={(e) => { e.preventDefault(); addTask(); }}>
                <input 
                    type='text'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add New Task"
                    className='border-white p-2 flex-grow mr-2 rounded' 
                />
                <button type="submit" className="bg-green-900 text-white px-4 rounded">
                    Add Task
                </button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between items-center border-b py-2">
                        <div className="flex items-center gap-3">
                            <input 
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="w-5 h-5 cursor-pointer"
                            />
                            <span className={task.completed ? 'line-through text-gray-400' : ''}>
                                {task.content}
                            </span>
                        </div>
                        <span className="text-gray-500 text-sm">
                            {new Date(task.created_at).toLocaleDateString()}
                        </span>
                        <button 
                            onClick={() => deleteTask(task.id)} 
                            className="bg-red-600 text-white px-3 py-1 rounded"
                        >
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