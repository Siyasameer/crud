import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Addform() {
  const[name,Setname]=useState("")
  const[age,Setage]=useState("")
  const[designation,Setdesignation]=useState("")
  const[Salary,setsalary]=useState("")
  const navigate=useNavigate();
  console.log(name,age,designation,Salary)
  const Addemployee=async(e)=>{
    e.preventDefault()
    const body={name,age,designation,Salary}
   
    try
    {
      const result=await axios.post("http://localhost:5000/addEmp",body)
      console.log
      alert("Employee register successfully")
      navigate('/')
    }
    catch(e){
      console.log(e.response)
      alert(e.response.data.message)
    }

  }
    
  return (
    <div>
      <Form className="mt-5 w-50 m-auto" onSubmit={Addemployee}>
      <Row>
        <Form.Label column lg={2}>
          Name
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Name of employee" onChange={((e)=>Setname(e.target.value))}/>
        </Col>
      </Row>
      
        <Form.Label column lg={2}>
            Age
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="AGE" onChange={((e)=>Setage(e.target.value))} />
        </Col>
      <Row>
        <Form.Label column lg={2}>
          Designation
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Designation" onChange={((e)=>Setdesignation(e.target.value))} />
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          Salary
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Salary" onChange={((e)=>setSalary(e.target.value))} />
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
      <Button variant="success"type='submit'>Save</Button>
      </div>
      </Form>
    </div>
  )
}

export default Addform
