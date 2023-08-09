import React from 'react';
import { ToDo } from './Global';
import ToDoAppHeader from './ToDoAppHeader';
import ToDoFooter from './ToDoFooter';
import ToDoList from './ToDoList';

const ToDoApp = () => {
  return (
    <ToDo>
      <ToDoAppHeader />
      <ToDoList />
      <ToDoFooter />
    </ToDo>
  );
};

export default ToDoApp;
