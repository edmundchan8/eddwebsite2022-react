import React, {useEffect, useState} from 'react'
import { NavLink, useLocation} from "react-router-dom";

function Applications() {
  const location = useLocation();
  const [showApp, setShowApp] = useState('');

  useEffect(() => {
      setShowApp(location.pathname);
  }, [location.key]);

  // console.log(showApp);

  return( 
    <div>
      {showApp == '/apps' ? <h1>Applications</h1> : null}
      {showApp == '/apps/todolist' ? <h1>To Do List</h1> : null}
      {showApp == '/apps/stockmanager' ? <h1>Stock Manager</h1> : null}
      <NavLink className="center-links" to="todolist">To Do List</NavLink>
      <NavLink className="center-links" to="stockmanager">Stock Manager</NavLink>
    </div>
  );
}

export default Applications