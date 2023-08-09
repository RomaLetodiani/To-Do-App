import React from 'react';
import { ContentDiv } from './Global';
import DarkModeToggleButton from './DarkModeToggleButton';
import ToDoApp from './ToDoApp';
import { useDarkMode } from '../Contexts/DarkModeContext';

const Content = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <ContentDiv isDarkMode={isDarkMode}>
      <DarkModeToggleButton />
      <h1>What's The Plan for Today?</h1>
      <ToDoApp />
    </ContentDiv>
  );
};

export default Content;
