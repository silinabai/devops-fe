import React from 'react';
import Button from 'antd/es/button';
import logo from '../../logo.svg';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 我问曾多次
        </a>
          <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
