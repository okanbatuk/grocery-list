import logo from "./logo.svg";
import "./App.css";

function App() {
  const nameChange = () => {
    const names = ["Bob", "John", "Jane"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {nameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
