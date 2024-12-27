import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
    return (
        <TaskProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Router>
        </TaskProvider>
    );
};

export default App;