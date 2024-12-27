import React from 'react';
import Form from '../components/Form';
import TaskList from '../components/TaskList';

const HomePage = () => {
    return (
        <div>
            <h1>Task Manager</h1>
            <Form />
            <TaskList />
        </div>
    );
};

export default HomePage;