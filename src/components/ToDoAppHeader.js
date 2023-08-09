import React, { useState } from 'react';
import { BsListTask } from 'react-icons/bs';
import { Header } from './Global';
import { useTasks } from '../Contexts/TasksContext';
import { useDarkMode } from '../Contexts/DarkModeContext';

const ToDoAppHeader = () => {
  const { isDarkMode } = useDarkMode();
  const { Tasks, setTasks } = useTasks();

  const [input, setInput] = useState('');

  const addTask = (task) => {
    if (input.trim() === '') {
      return;
    }

    task = {
      id: Math.floor(Math.random() * 10000),
      name: input,
      completed: false,
    };

    const newTasks = [task, ...Tasks];

    setTasks(newTasks);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Header isDarkMode={isDarkMode}>
      <BsListTask />
      <input
        type="text"
        value={input}
        name="task"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type Your New Task Here"
      />
      <button onClick={addTask}>ADD</button>
    </Header>
  );
};

export default ToDoAppHeader;
