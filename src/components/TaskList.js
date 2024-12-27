import React from 'react';
import TaskItem from './TaskItem';
import { useTasks } from '../hooks/useTasks';

const TaskList = () => {
    const { tasks } = useTasks();

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;