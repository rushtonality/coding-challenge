import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <div>
        <ul>
          <li>
            <Link to="/article/edit/1">Article 1</Link>
          </li>
          <li>
            <Link to="/article/add">Add</Link>
          </li>
        </ul>
      </div>
  );
}

export default App;
