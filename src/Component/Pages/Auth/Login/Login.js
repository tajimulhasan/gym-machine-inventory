import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import google2 from '../../../Images/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error1,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const handleEmailRef = useRef('');
  const handlePassRef = useRef('');
  const from = location.state?.from?.pathname || "/";
  if(user){
    console.log(user);
    navigate(from, {replace: true})
  }
  const handleLoginSubmit = e =>{
    e.preventDefault();
    const email = handleEmailRef.current.value;
    const password = handlePassRef.current.value;
  signInWithEmailAndPassword(email, password);
 }

    return (
        <div>
         
           <Form onSubmit={handleLoginSubmit} className="sign-form mt-4">
           <h1 className='text-center m-2'>Login</h1>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={handleEmailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={handlePassRef} type="password" placeholder="Password" />
        </Form.Group>
        <p className="text-danger mb-2" style={{fontSize: '14px'}}>{error1?.message}</p>
        <p className="text-danger mb-2" style={{fontSize: '14px'}}>{error2?.message}</p>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p className="mb-0 mt-2">Create account? <Link to='/signup'>Sign up</Link></p>
        <Button className="form-submit mt-3" type="submit">
          Login
        </Button>
      </Form>
      <div className="space-line mt-3">
        <div className="lin"></div>
        <p>Or</p>
        <div className="lin"></div>
      </div>

      <div onClick={() => signInWithGoogle()} className="google-login">
        <div className="google-logo">
          <img src={google2} alt="" />
        </div>
        <div className="google-details">
          <p>Continue with Google</p>
        </div>
      </div>
        </div>
    );
};

export default Login;