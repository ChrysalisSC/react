import './App.css';
import Employee from './components/Employee'
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');

  const showEmployees = true;
  

  return (
    <div className="App">
    
      {showEmployees ?     
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value)
        setRole(e.target.value);
        
      }}/>
        <Employee name="calub" role="intern"/>
        <Employee name="abby" role={role}/>
        <Employee name="john"/>

     
        </>
      :
      <p> you cannot see the employees </p>
      }
    </div>
  );
}

export default App;

