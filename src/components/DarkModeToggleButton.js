import React from 'react';
import { useDarkMode } from '../Contexts/DarkModeContext';
import { ToggleBtn } from './Global';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ToggleBtn onClick={toggleDarkMode} isDarkMode={isDarkMode}>
      {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </ToggleBtn>
  );
};

export default DarkModeToggleButton;
