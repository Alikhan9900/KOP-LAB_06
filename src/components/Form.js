import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';

const Form = () => {
    const [task, setTask] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask({ id: Date.now(), name: task });
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default Form;
