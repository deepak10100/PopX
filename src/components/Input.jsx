import React from 'react'
import './input.css'
function Input({ label, name, type = "text", value, onChange, placeholder }) {
  return (

    <>
    <div className="form-group">
    
     <label htmlFor={name} className="form-label">{label}<span>*</span></label>
    <input id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder} className="form-input" />
  </div>
    </>
  )
}

export default Input