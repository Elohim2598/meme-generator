import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';

function App() {
  return (
    <div>
      <Header>
        <Content />
      </Header>
    </div>
  );
}

export default App;
