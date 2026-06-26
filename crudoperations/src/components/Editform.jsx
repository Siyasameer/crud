import React, { use, useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Editform() {
   const[name,Setname]=useState("")
    const[age,Setage]=useState("")
    const[designation,Setdesignation]=useState("")
    const[Salary,setsalary]=useState("")
    const navigate=useNavigate()
  const {id}=useParams()
  const getEmployee=async()=>{

    try
    {
            const res=await axios.get(`http://localhost:5000/getEmpDetails/${id}`)
            console.log(res.data.details.name)
            Setname(res.data.details.name)
              Setage(res.data.details.age)
              Setdesignation(res.data.details.designation)
              setsalary(res.data.details.Salary)
            
    }
    catch(e)
    {
      console.log(e)
    }
  }
  useEffect(()=>{getEmployee()},[])
  console.log(id)

  const updateEmp=async(e)=>{
    e.preventDefault()
    const body={name,age,designation,Salary}
      
    
    try
    {
      const res=await axios.put(`http://localhost:5000/updateEmp/${id}`,body)
      console.log(res)
      alert("updated successfuly")
      navigate('/')
    }
    catch(e)
    {
      console.log(e)
    }
  }

  return (
    <div>
      <Form className="mt-5 w-50 m-auto" onSubmit={updateEmp}>
      <Row>
        <Form.Label column lg={2}>
          Name
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Name of employee" value={name}onChange={(e)=>Setname(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
            Age
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="AGE" value={age}onChange={(e)=>Setage(e.target.value)}/>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          Designation
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Designation" value={designation}onChange={(e)=>Setdesignation(e.target.value)}/>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={2}>
          Salary
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Salary" value={Salary}onChange={(e)=>setsalary(e.target.value)}/>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
      <Button variant="success"type='submit'>Save</Button>
      </div>
      </Form>
      
    </div>
  )
}

export default Editform
