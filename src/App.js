import './App.css';
import Pane from './components/pane';
import { ThemeContext } from './components/themeContext';

function App() {
  return (
    <ThemeContext>
      <Pane>
        <div>suwoop</div>
      </Pane>
    </ThemeContext>
  );
}

export default App;
