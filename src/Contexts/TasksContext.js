import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();
export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [Tasks, setTasks] = useState([]);
  const [viewMode, setViewMode] = useState('all');

  return (
    <TasksContext.Provider value={{ Tasks, setTasks, viewMode, setViewMode }}>
      {children}
    </TasksContext.Provider>
  );
};
