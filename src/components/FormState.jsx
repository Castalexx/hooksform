import React from 'react'
import { useState } from 'react';

/* Si el nombre o apellido tiene menos de 2 caracteres, genera un mensaje de error que diga que el campo debe tener al menos 2 caracteres.
Si el correo electrónico tiene menos de 5 caracteres, aparecerá un mensaje de error diciendo que el campo debe tener al menos 5 caracteres.
Las contraseñas deben coincidir y tener al menos 8 caracteres. */



const Form = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("")
  const [cPassword, setCPassword] = useState("");
  const [cPasswordError, setCPasswordError] = useState('')

  const createUser = (event) => {
    event.preventDefault();
  } 

  const nameHandler = (evento) => {
    const input = evento.target.value;
    if(input.length <= 2 && input.length > 0) {
      setNameError("Your name must be longer than 2 characters")
    } else {
      setNameError("")
    }
    setName(input);
  }
  
  const emailHandler = (evento) => {
    const input = evento.target.value;
    if(input.length <= 5 && input.length > 0) {
      setEmailError("Your mail must be longer than 5 characters")
    } else {
      setEmailError('')
    }
    setEmail(input)
  }

  const passwordHandler = (evento) => {
    const input = evento.target.value;
    if (input.length <= 8 && input.length > 0) {
      setPasswordError('Your password must be longer than 8 characters')
    } else {
      setPasswordError('')
    }
    setPassword(input)
  }

  const cPasswordHandler = (evento) => {
    const input = evento.target.value;
    if(input!=password && input.length > 0) {
      setCPasswordError('The passwords must match')
    } else {
      setCPasswordError('')
    }
    setCPassword(input)
  }

  return (
    <div className='grid text-center'>
      <form action="" onSubmit={createUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={name} onChange={nameHandler} type="text" className="form-control" id="name" />
          <p className='text-danger'>{nameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input onChange={(evento) => setLastName(evento.target.value)} type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={emailHandler} type="email" className="form-control" id="exampleInputEmail1" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          <p className='text-danger'>{emailError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={passwordHandler} type="password" className="form-control" id="exampleInputPassword1"/>
          <p className='text-danger'>{passwordError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
          <input onChange={cPasswordHandler} type="password" className="form-control" id="confirmPass"/>
          <p className='text-danger'>{cPasswordError}</p>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      <div>
        <p>Name: {name}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm password: {cPassword}</p>
      </div>
    </div>
  )
}

export default Form