import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className='App'>
  //     <h2>This is heading 2</h2>
  //     <Name />
  //   </div>

  // );

  // Using React Library
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('h1', null, 'This is Heading Two', <Name />)
  );
}

function Name() {
  // return (
  //   <div>
  //     <h2>Ehsan</h2>
  //   </div>
  // );

  // Using React Library
  return React.createElement(
    'div',
    null,
    React.createElement('h2', { className: 'App' }, 'Ehsan')
  );
}

export default App;
