import * as React from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import App from './app';
import { BrowserRouter } from 'react-router-dom';

function Index() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Index

if (document.getElementById('root')) {
  ReactDOM.render(<Index />, document.getElementById('root'));
}