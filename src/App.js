import './App.css';
import { DarkModeProvider } from './Contexts/DarkModeContext';
import { TasksProvider } from './Contexts/TasksContext';
import Content from './components/Content';

function App() {
  return (
    <DarkModeProvider>
      <TasksProvider>
        <Content />
      </TasksProvider>
    </DarkModeProvider>
  );
}

export default App;
