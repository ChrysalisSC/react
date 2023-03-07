# There was a bunch of inital stuff that was deleted that I dont care for.



# Part 4 Understand COmponents

console.log()

showEmployees ? 
* the question mark is bascially like saying do i want to show employees?


<> and </ > is basiclaly <div> but without the div

Each cmoponent is its own perfect thing. components are nestable


# part 5 Props 
How the parent component can give info to child component

function Employee(props){
	return <h3> Employee {props.name} </h3>

and inside the app.js

 <Employee name="calub"/ >


# part 5 State
state can be tied to user interface to automatically update

import { useState } from 'react';
const [role, setRole] = useState('dev');
setRole(e.target.value);