import React from 'react'
import "./SignIn.css"
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  return (
    <div>
        <div className="sign-left">
            <div className="book-info">

            </div>
        </div>
        <div className="sign-right">
            <h1>Welcome Back !</h1>
            <label htmlFor="">UserName</label>
            <input type="text" name="username" id="username" />

            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" />

            <div>
                <button className='btn-SignIn'>
                    <NavLink to={'/GetStarted'}>SignIn</NavLink>
                </button>
            </div>
        </div>
    </div>
  )
}
