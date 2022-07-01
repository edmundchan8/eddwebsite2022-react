import * as React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './navigation';
import '../styles/App.css';

function App() {
  return (
      <div className="app align-middle">
          <Navigation />
      </div>
  );
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}