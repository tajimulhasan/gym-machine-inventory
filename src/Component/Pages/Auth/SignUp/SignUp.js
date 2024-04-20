import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SignUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import google from "../../../Images/google.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
const SignUp = () => {
  const [sendEmailVerification, sending, error3] =
    useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading3, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, loading2, error2] = useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const handleName = useRef("");
  const handleEmail = useRef("");
  const handlePassword = useRef("");
  const handleConPass = useRef("");
  const navigate = useNavigate();

  if (user) {
    console.log(user);
    navigate("/");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = handleName.current.value;
    const email = handleEmail.current.value;
    const password = handlePassword.current.value;
    const confPass = handleConPass.current.value;

    if (password !== confPass) {
      setError("*Password doesn't match");
    }
    if (password.length < 6) {
      setError("*Password must be at least 6 charecter");
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="sign-form mt-4">
        <h2 className="text-center">SignUp</h2>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            ref={handleName}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={handleConPass}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger mb-2" style={{ fontSize: "14px" }}>
          {error}
        </p>
        <p className="text-danger mb-2" style={{ fontSize: "14px" }}>
          {error1?.message}
        </p>
        <p className="text-danger mb-2" style={{ fontSize: "14px" }}>
          {error2?.message}
        </p>
        <p className="text-danger mb-2" style={{ fontSize: "14px" }}>
          {error3?.message}
        </p>
        <Form.Group className="mb-2 d-flex" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
          />
          <label
            className={`${agree ? "ms-2 text-success" : "text-danger ms-2"}`}
            htmlFor="terms"
          >
            Accept our terms and condition
          </label>
        </Form.Group>
        <p className="mb-0 mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <Button disabled={!agree} className="form-submit mt-3" type="submit">
          Sign Up
        </Button>
      </Form>
      <div className="space-line mt-3">
        <div className="lin"></div>
        <p>Or</p>
        <div className="lin"></div>
      </div>

      <div onClick={() => signInWithGoogle()} className="google-login">
        <div className="google-logo">
          <img src={google} alt="" />
        </div>
        <div className="google-details">
          <p>Continue with Google</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
