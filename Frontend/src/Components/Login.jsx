import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form className=' col-lg-4 text-center justify-center mx-auto'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
<p className='al'>New user please  <Link to={"/Signin"}>Create an account</Link> </p>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
