import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          List of comments:
       <CommentsListContainer />
      </header>
      <DevTools />
    </div>
  );
}

export default App;
