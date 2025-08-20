import React, { useState } from 'react'
import Input from '../Input'
import { Link } from 'react-router-dom'
import './signin.css'

function Signin() {
     const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };
  return (
    <>
     <div className="container">
       <div className='h btn-center'>
        <div className=''>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
       <form  onSubmit={handleSubmit} className='form-m'>

        <Input label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"/>
        <Input label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"/>
        
        <Link to={'/profile'}><button className='bg-primary'>Login</button></Link>
        </form>
    
      </div>
     </div>
    </div>
    </>
  )
}

export default Signin