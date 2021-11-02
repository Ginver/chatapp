import React from 'react';
import  Login  from './Login';
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";

function App() {
    // const [ id, setId ] = useState() - useState will be exchanged by useLocalStorage
    const [ id, setId ] = useLocalStorage('id')

  return (
      // if you have an id you want to go to another page,
      //   if not you want to go to this login page and otherwise
      //   you want to go to the Dashboard:
          id ? <Dashboard id={id}/> : <Login onIdSubmit={setId}/>
  );
}

export default App;
