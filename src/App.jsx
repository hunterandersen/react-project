import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, Emmet</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <ul>
          <li>Components</li>
          <li>Modular</li>
          <li>Reusable</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
    </div>
  );
}

export default App;
