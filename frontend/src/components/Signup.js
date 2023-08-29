import React, { useState } from 'react';
import image1 from './images/image1.png'
import logo from './images/logoicon.png'
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
}
  from 'mdb-react-ui-kit';

export const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "", otp: "" });
  const [crederrors, setCrederrors] = useState({ name: "", email: "", password: "", cpassword: "", otp: "" });
  const [backendmessage, setBackendmessage] = useState("")
  const [Otp, setOtp] = useState('')
  const [show, setShow] = useState(0)
  let navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault()
    const errors = {};
    setBackendmessage("")
    if (credentials.email.trim() === '') {
      errors.email = 'This field is required.';
    } else if (!isValidEmail(credentials.email)) {
      errors.email = 'Invalid email format.';
    }
    setCrederrors(errors);
    if (Object.keys(errors).length === 0) {
      const response = await fetch("http://localhost:5000/user/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Otp: '',
          email: credentials.email
        })
      });
      const json = await response.json();
      if (json.success) {
        alert("OTP sent successfully");
        setOtp(JSON.stringify(json.Otp))
      } else {
        setBackendmessage(json.message)
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    setBackendmessage("")
    if (credentials.name.trim() === '') {
      errors.name = 'This field is required.';
    }

    if (credentials.email.trim() === '') {
      errors.email = 'This field is required.';
    } else if (!isValidEmail(credentials.email)) {
      errors.email = 'Invalid email format.';
    }

    if (credentials.password.trim() === '') {
      errors.password = 'This field is required.';
    } else if (credentials.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (credentials.cpassword.trim() === '') {
      errors.cpassword = 'This field is required.';
    } else if (credentials.cpassword !== credentials.password) {
      errors.cpassword = 'Passwords do not match.';
    }

    if (credentials.otp.trim() === '') {
      errors.otp = 'This field is required.';
    } else if (credentials.otp !== Otp) {
      errors.otp = 'Invalid OTP.';
    }

    setCrederrors(errors);
    if (Object.keys(errors).length === 0) {
      const response = await fetch(
        "https://travel-sathi.onrender.com/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        navigate("/login");
      } else {
        setBackendmessage(json.message);
      }
    }
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const func = (e) => {
    (show) ? setShow(0) : setShow(1)
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="5" style={{ backgroundColor: "#ffffff" }}>
          <div className="d-flex flex-row ps-5 pt-5 mx-3">
            <img src={logo} style={{ width: "200px" }} alt="logo" />
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-bold mb-3 ps-5 pb-3 mx-3"
              style={{ letterSpacing: "1px" }}
            >
              SignUp
            </h3>
            <form id="signupform" name="signupform" onSubmit={handleSubmit}>
              <div className="container mb-4 mx-5" id="name">
                <input
                  type="text"
                  className="w-100 fs-5 form-control"
                  value={credentials.name}
                  onChange={onChange}
                  name="name"
                  placeholder="Name"
                />
                {crederrors.name && (
                  <p style={{ color: "red" }}>{crederrors.name}</p>
                )}
              </div>

              <div className="input-group container mb-4 mx-5" id="email">
                <input
                  type="text"
                  className="w-75 fs-5 form-control"
                  value={credentials.email}
                  onChange={onChange}
                  name="email"
                  placeholder="Email"
                />
                <button onClick={onClick} className="btn w-25 btn-primary">
                  Send OTP
                </button>
                {crederrors.email && (
                  <p style={{ color: "red" }}>{crederrors.email}</p>
                )}
              </div>

              <div className="container mb-4 mx-5" id="otp">
                <input
                  type="number"
                  className="w-100 fs-5 form-control"
                  value={credentials.otp}
                  onChange={onChange}
                  name="otp"
                  placeholder="OTP"
                  maxLength="6"
                  pattern="\d{6}"
                />
                {crederrors.otp && (
                  <p style={{ color: "red" }}>{crederrors.otp}</p>
                )}
              </div>

              <div className="input-group container mb-4 mx-5">
                <input
                  type={`${show ? "text" : "password"}`}
                  className="w-75 fs-5 form-control"
                  value={credentials.password}
                  onChange={onChange}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <span type="submit" className="input-group-text" onClick={func}>
                  <i className={`bi bi-eye${show ? "" : "-slash"}`}></i>
                </span>
                {crederrors.password && (
                  <p style={{ color: "red" }}>{crederrors.password}</p>
                )}
              </div>

              <div className="input-group container mb-4 mx-5">
                <input
                  type={`${show ? "text" : "password"}`}
                  className="w-75 fs-5 form-control"
                  value={credentials.cpassword}
                  onChange={onChange}
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                />
                <span type="submit" className="input-group-text" onClick={func}>
                  <i className={`bi bi-eye${show ? "" : "-slash"}`}></i>
                </span>
                {crederrors.cpassword && (
                  <p style={{ color: "red" }}>{crederrors.cpassword}</p>
                )}
                {backendmessage && (
                  <p style={{ color: "red" }}>{backendmessage}</p>
                )}
              </div>

              <div className="container mb-4 mx-5">
                <button type="submit" className="btn fs-5 w-100 btn-primary">
                  Signup
                </button>
              </div>
            </form>
            <p className="fw-normal" style={{ marginLeft: "60px" }}>
              Already have an account?{" "}
              <a
                href="https://travel-sathi.onrender.com/user/login"
                className="link-primary"
              >
                Signin
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="7" className="d-none d-sm-block px-0">
          <img
            src={image1}
            alt="poster"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
