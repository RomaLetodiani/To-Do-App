import React from 'react';
import { Footer } from './Global';
import { useTasks } from '../Contexts/TasksContext';
import { useDarkMode } from '../Contexts/DarkModeContext';

const ToDoFooter = () => {
  const { isDarkMode } = useDarkMode();
  const { Tasks, setTasks, viewMode, setViewMode } = useTasks();

  const tasksLeft = Tasks.filter((task) => !task.completed).length;

  const handleClearBtn = () => {
    setTasks([]);
    setViewMode('all');
  };

  return (
    <Footer isDarkMode={isDarkMode}>
      <button
        onClick={() => setViewMode('all')}
        className={viewMode === 'all' ? 'active' : ''}
      >
        All Tasks
      </button>
      <button
        onClick={() => setViewMode('pending')}
        className={viewMode === 'pending' ? 'active' : ''}
      >
        Pending
      </button>
      <button
        onClick={() => setViewMode('completed')}
        className={viewMode === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
      <p onClick={() => setViewMode('pending')}>
        {tasksLeft} {tasksLeft <= 1 ? 'Task' : 'Tasks'} Left
      </p>
      <p onClick={handleClearBtn}>Clear All</p>
    </Footer>
  );
};

export default ToDoFooter;
