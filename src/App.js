import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import images from './images'
import {v4 as uuidv4} from 'uuid';




function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
      [
        {
          name : "Spirit Ahri",
          role: role,
          img: images.a,
          id: uuidv4()
        },
        {
          name : "Spirit Ahri",
          role:role,
          img: images.b,
          id:2
        },
        {
          name : "Spirit Ahri",
          role:role,
          img: images.c,
          id:3
        },
      ]
    )

  const showEmployees = true;
  

  return (
    <div className="App ">
    
      {showEmployees ?     
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value)
        setRole(e.target.value);

      }}/>
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            console.log(employee);
            return(
              <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>
            );
          })}
        </div>

     
        </>
      :
      <p> you cannot see the employees </p>
      }
    </div>
  );
}

export default App;

