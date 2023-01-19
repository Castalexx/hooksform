import React from 'react'
import { useState } from 'react';

const Form = () => {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const createUser = (evento) => {
    evento.preventDefault();
  } 

  return (
    <div className='grid text-center'>
      <form action="" onSubmit={createUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={(evento) => setName(evento.target.value)} type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input onChange={(evento) => setLastName(evento.target.value)} type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={(evento) => setEmail(evento.target.value)} type="email" className="form-control" id="exampleInputEmail1" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={(evento) => setPassword(evento.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
          <input onChange={(evento) => setCPassword(evento.target.value)} type="password" className="form-control" id="confirmPass"/>
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