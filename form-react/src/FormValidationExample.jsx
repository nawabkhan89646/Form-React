import React, { useState } from 'react';
import './App.css'

const FormValidationExample = () => {

  // Initialize state for form data and validation errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Handle changes to form fields and update state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value  // Dynamically update the field in formData based on the name attribute
    });
  };

  // Handle form submission and perform validation
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const validationErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid"; // Check if email is in correct format
    }

    // Validate password
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    // Validate confirm password (should match the password)
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password does not match";
    }

    // Update the errors state with any validation errors
    setErrors(validationErrors);

    // If no errors, show a success message and reset the form
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      
      // Reset form data
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"  
          autoComplete="off"
          onChange={handleChange}   
        />
        {errors.username && <span>{errors.username}</span>}  {/* Display username validation error if exists */}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="example@gmail.com"
          autoComplete="off"
          onChange={handleChange} 
        />
        {errors.email && <span>{errors.email}</span>}  {/* Display email validation error if exists */}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="******"
          onChange={handleChange} 
        />
        {errors.password && <span>{errors.password}</span>}  {/* Display password validation error if exists */}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="******"
          onChange={handleChange} 
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  {/* Display confirm password validation error if exists */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
