import './App.css';
import ThemeMode from "./components/ThemeMode";

function App() {
  return (
    <main>
      <h1>React Theme Mode</h1>
      <p>Switch between light and dark mode using CSS classes.</p>
      <ThemeMode />
    </main>
  );
}

export default App;
