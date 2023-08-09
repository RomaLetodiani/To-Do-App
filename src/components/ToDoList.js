import React from 'react';
import { Task } from './Global';
import { BsCircle } from 'react-icons/bs';
import { MdTaskAlt } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { useTasks } from '../Contexts/TasksContext';

const ToDoList = () => {
  const { Tasks, setTasks, viewMode } = useTasks();

  const deleteTask = (id) => {
    const updatedTasks = Tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = Tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = Tasks.filter((task) => {
    if (viewMode === 'pending') return !task.completed;
    if (viewMode === 'completed') return task.completed;
    return true; // Show all tasks by default
  });

  return (
    <main>
      {filteredTasks < 1 ? (
        <h1>
          You don't have any{' '}
          {viewMode === 'completed' ? 'completed ' : 'pending '}
          Tasks
        </h1>
      ) : (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            lined={task.completed ? 'line-through' : 'none'}
            color={task.completed ? '#ffffffa3' : '#fff'}
          >
            <div>
              {task.completed ? (
                <MdTaskAlt
                  className="completed"
                  onClick={() => completeTask(task.id)}
                />
              ) : (
                <BsCircle
                  className="pending"
                  onClick={() => completeTask(task.id)}
                />
              )}
              <p onClick={() => completeTask(task.id)}>{task.name}</p>
            </div>
            <ImCross
              className="deleteBtn"
              onClick={() => deleteTask(task.id)}
            />
          </Task>
        ))
      )}
    </main>
  );
};

export default ToDoList;
