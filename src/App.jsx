
import { useState } from 'react'

// src/App.jsx

import './App.css';

const App = () => {
  const [mode, setMode] = useState('light')
  const handleMode = (modeValue) => {
    setMode(modeValue)
  }
  const [cityInput, setCityInput] = useState('')
  const handleChange = (event) => {
    setCityInput(event.target.value)
  }

  const [title, setTitle] = useState('The full name will appear here.')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  })


  const handleChanges = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value})
  }

  const handleSubmit=(event) => {
    event.preventDefault();
    setTitle(`Your Name is: ${formData.firstName} ${formData.lastName}`)
    setFormData({firstName: '', lastName: ''})
  }


  return (
    <>

      <div className={mode}>
        <h1>Hello world!</h1>
      </div>

      <div className={mode}>
        <label htmlFor="cityInput">City: </label>
        <input 
          id="cityInput" 
          name="cityInput" 
          type="text" 
          value={cityInput}
          onChange={handleChange}
        />
      </div>

      <div>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input 
            id='firstName' 
            name='firstName' 
            value={formData.firstName} 
            onChange={handleChanges}/>

          <label htmlFor="lastName">Last Name: </label>
          <input 
            id='lastName' 
            name='lastName' 
            value={formData.lastName} 
            onChange={handleChanges}/>

          <button type="submit">Submit your name</button>
        </form>
      </div>

      <div className={mode}>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>

    </>
  );
};

export default App;
