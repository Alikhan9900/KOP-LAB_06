import React from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskItem = ({ task }) => {
    const { removeTask } = useTasks();

    return (
        <li>
            {task.name}
            <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
    );
};

export default TaskItem;