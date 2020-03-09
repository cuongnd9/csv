import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    fetch('http://127.0.0.1:7777/csv')
			.then(response => {
				window.location.href = response.url;
		});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="App-link" onClick={handleClick}>
          Download file
        </button>
      </header>
    </div>
  );
}

export default App;
