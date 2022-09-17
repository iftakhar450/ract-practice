import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';
import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';

function App() {
  return (
    <div className="App">
      <h1>Context Api Practice </h1>
      <CounterContextProvider>
        <ComponentA />
        <ComponentB />
        <MyCounter />
      </CounterContextProvider>

    </div>
  );
}

export default App;
