import React from 'react'
import './home.css'
import Button from '../Button.jsx'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="container">
       <div className='h btn-center'>
        <div className='relative'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
       <Link to={'/create'}> <Button/></Link>
        <Link to={'/signin'}><button className='bg-purple'>Already Registered? Login</button></Link>
    
      </div>
     </div>
    </div>
  )
}

export default Home