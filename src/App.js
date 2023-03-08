import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import images from './images'
import {v4 as uuidv4} from 'uuid';


//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

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
          name : "Elderwood Ahri",
          role:role,
          img: images.b,
          id:2
        },
        {
          name : "K/DA Ahri",
          role:role,
          img: images.c,
          id:3
        },
      ]
    )

  const showEmployees = true;

  function updateEmployee(id, newName, newRole){
    console.log('update employee inside app.js');
    const updatedEmployees = employees.map((employee)=> {
      if(id === employee.id){
        return {...employee, name: newName, role:newRole}
      }
      return employee;

    });

    setEmployees(updatedEmployees);
  }
  

  return (
    <div className="App ">
    
      {showEmployees ?     
      <>
      <input type="text" onChange={(e) => {
        //console.log(e.target.value)
        setRole(e.target.value);

      }}/>
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            //console.log(employee);
            return(
              <Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} updateEmployee={updateEmployee}/>
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

