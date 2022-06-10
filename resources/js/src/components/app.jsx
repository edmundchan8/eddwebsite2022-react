import * as React from 'react'
import ReactDOM from 'react-dom'
import Index from './index';
import Navigation from './navigation';

function App() {
  return (
    <div>
        <Navigation />
    </div>
  );
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}