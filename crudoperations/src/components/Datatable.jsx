import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Datatable() {
  const[allEmp,setallEmp]=useState([])
  const getEmployee=async()=>{

        try
        {
            const reqres=await axios.get("http://localhost:5000/getEmp")
            // console.log(reqres.data.Employees);
            setallEmp(reqres.data.Employees)
            
            
        }
        catch(e)
        {
          console.log(e.response)
        }
      }
      // getEmployee();
      useEffect(()=>{getEmployee()},[])
      console.log(allEmp)
      const deleteEmp=async(id)=>{
        try
        {
          console.log("hit")
          const res=await axios.delete(`http://localhost:5000/deleteEmp/${id}`)
          console.log(res)
          alert("employee deleted successfully");
          getEmployee();
        }
        catch(e)
        {
           console.log(e)
        }
      }
       return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>no.</th>
          <th> Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          
        </tr>
      </thead>
      <tbody>
        {allEmp.map((emp,index)=>(
        <tr key={emp.id}>
          <td>{index+1}</td>
          <td>{emp.name}</td>
          <td>{emp.age}</td>
          <td>{emp.designation}</td>
          <td>{emp.salary}</td>
      <td ><Button as={Link} to={`/Editform/${emp._id}`} variant="primary">edit</Button></td>
          <td><Button variant="danger" onClick={()=>deleteEmp(emp._id)}>delete</Button></td>
        </tr>
          ))}
       
      </tbody>
    </Table>

    </div>
  )
}

export default Datatable
