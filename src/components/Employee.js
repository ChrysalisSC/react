function Employee(props){
	
	return( 
		<>
		<h3> Employee {props.name} </h3>
		<p>{props.role ? props.role : "no Role"}</p>
		</>
	)
}


export default Employee