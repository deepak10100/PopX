import React, { useState } from "react";
import Input from "../Input";
// import RadioButtonGroup from "../RadioButtonGroup";
import Button from "../Button";
import { Link } from "react-router-dom";
import RadioButtonGroup from "../RadioButtonGroup ";

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    companyName: "",
    agency: "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
  };

  return (
    <div className="container">
      <div className="h btn-center">
        <h1>Create your PopX account</h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName" 
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <Input
            label="Phone Number"
            name="phoneNumber" 
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <Input
            label="Company Name"
            name="companyName" 
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your Company Name"
          />

          <RadioButtonGroup
            label="Are you an Agency?"
            options={["Yes", "No"]}
            name="agency"
            required={true}
            onChange={(value) =>
              setFormData({ ...formData, agency: value }) 
            }
          />

          <div className="relative">
            <Link to={"/profile"}>
              <Button />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
