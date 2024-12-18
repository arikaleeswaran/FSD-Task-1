import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import './new.css'
import axios from 'axios'
import Validate from '../Validate'

function New() {
const [data,setData] = useState({
  name:"",
  emp_id:"",
  email:"",
  phone:"",
  dept:"",
  d_join:"",
  role:""
})
const[errors,setErrors] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const validateError = Validate(data);
    setErrors(validateError)
    const hasNoErrors = Object.keys(validateError).length === 0;
    if(hasNoErrors){
      console.log(data);
      axios.post("http://localhost:3660/newemp",data).then(
        res => {
          alert(res.data)
          navigate('/') 
        }
      ).catch(err => {
        if(err.response && err.response.status === 409){
          setErrors(prev => ({...prev,duplicate: err.response.data.error}))
        };
        console.log(err)
      })
    }
    
  }

  const handleReset =()=>{
    setData({
      name:"",
      emp_id:"",
      email:"",
      phone:"",
      dept:"",
      d_join:"",
      role:""
    });
    setErrors({})
  };

  const handleChange = (e)=>{
    const {name,value} = e.target;
    const newData = {...data,[name]:value}
    setData(newData);
    console.log(data);

    const validationErrors = new Validate(newData);
    setErrors(validationErrors);
    
  }

  const hanldeBack = ()=>{
    navigate('/')
  }

  return (
    <div className=''>
        <h2 className='head'>
          Add New Employee
        </h2>
        <div className='inputfield'>
          <div className='title'>
          <button onClick={hanldeBack}>Back</button>
            New Employee
          </div>
          <form action="" onSubmit={handleSubmit}>
            
              <div className='inputcol'>
              <div className='inputItem'>
                <label htmlFor="" >Employee ID: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter Employee ID' className='item' name='emp_id' value={data.emp_id}/>
                {errors.duplicate && <span className='error'>{errors.duplicate}</span>}
                {errors.emp_id && <span className='error'>{errors.emp_id}</span>}
              </div>
              <div className='inputItem'>
                <label htmlFor="" >Name: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter Name' className='item' name='name' value={data.name}/>
                {errors.name && <span className='error'>{errors.name}</span>}
              </div>
              <div className='inputItem'>
                <label htmlFor="" >Email: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter email' className='item' name='email' value={data.email} />
                {errors.email && <span className='error'>{errors.email}</span>}
              </div>
              <div className='inputItem'>
                <label htmlFor="" >Phone: </label>
                <input type="number" required onChange={handleChange} placeholder='Enter Phone No.' className='item' name='phone' value={data.phone} />
                {errors.phone && <span className='error'>{errors.phone}</span>}
              </div>
              <div className='inputItem'>
                <label htmlFor="" >Department: </label>
                <select name="dept" required id="" onChange={handleChange} >
                    <option value="">Select Department</option>
                    <option value="HR" >HR</option>
                    <option value="Engineering" >Engineering</option>
                    <option value="Product Development">Product Development</option>
                    <option value="Research & Development">Research & Development</option>
                    <option value="Marketing">Marketing</option>
                </select>
                {errors.dept && <span className='error'>{errors.dept}</span>}
              </div>
              <div className='inputItem'>
                <label htmlFor="" >Date of Joining: </label>
                <input type="date" required onChange={handleChange} placeholder='Select Date' className='item' name='d_join' value={data.d_join}/>
                {errors.d_join && <span className='error'>{errors.d_join}</span>}
              </div>
              <div className='inputItem'>
                <label htmlFor="" >Role: </label>
                <input type="text" required onChange={handleChange} placeholder='Enter role' className='item' name='role' value={data.role}/>
                {errors.role && <span className='error'>{errors.role}</span>}
              </div>
              </div>
            <div className='btn'>
              <button type='reset' className='reset' onClick={handleReset}>Reset</button>
              <button type='submit' className='submit'>Submit</button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default New