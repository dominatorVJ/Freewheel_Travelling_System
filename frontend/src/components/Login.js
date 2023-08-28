import React, { useState } from 'react';
import image1 from './images/image1.png'
import logo from './images/logoicon.png'
import { useNavigate } from "react-router-dom";
import {
    MDBContainer,
    MDBRow,
    MDBCol
}
    from 'mdb-react-ui-kit';

export const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [crederrors, setCrederrors] = useState({ email: "", password: "" });
    const [backendmessage, setBackendmessage] = useState("")
    const [show, setShow] = useState(0)
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {}
        setBackendmessage("")
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

        setCrederrors(errors);
        if (Object.keys(errors).length === 0) {
            const response = await fetch(
              "https://travel-sathi.onrender.com/user/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password,
                }),
              }
            );
            const json = await response.json();
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem("token", json.authtoken);
                navigate("/");
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
    /*const samp = (e) => {
        e.preventDefault()
        window.open('https://www.facebook.com', '_blank');
    }*/

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <MDBContainer fluid>
            <MDBRow>

                <MDBCol sm='5' style={{ backgroundColor: '#ffffff' }}>

                    <div className='d-flex flex-row ps-5 pt-5 mx-3'>
                        <img src={logo} style={{ width: '200px' }} alt="logo" />
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        <h3 className="fw-bold mb-3 ps-5 pb-3 mx-3" style={{ letterSpacing: '1px' }}>Sign In</h3>
                        <form onSubmit={handleSubmit}>
                            <div className='container mb-4 mx-5'>
                                <input type="text" className="w-100 fs-5 form-control" value={credentials.email} onChange={onChange} id="email" name="email" placeholder="Email" />
                                {crederrors.email && <p style={{ color: 'red' }}>{crederrors.email}</p>}
                            </div>
                            <div className='input-group container mb-4 mx-5'>
                                <input type={`${(show) ? "text" : "password"}`} className="w-75 fs-5 form-control" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password" />
                                <span type='submit' className="input-group-text" onClick={func}><i className={`bi bi-eye${(show) ? "" : "-slash"}`}></i></span>
                                {crederrors.password && <p style={{ color: 'red' }}>{crederrors.password}</p>}
                                {backendmessage && <p style={{ color: 'red' }}>{backendmessage}</p>}
                            </div>
                            <div className='container mb-4 mx-5'>
                                <button type="submit" className="btn fs-5 w-100 btn-primary">Signin</button>
                            </div>
                        </form>
                        <p className="fw-normal mb-5" style={{ marginLeft: "60px" }}><a className="link-primary" href="/forgotpassword">Forgot password?</a></p>
                        <p className='fw-normal' style={{ marginLeft: "60px" }}>Don't have an account? <a href="/signup" className="link-primary">Signup</a></p>

                    </div>

                </MDBCol>

                <MDBCol sm='7' className='d-none d-sm-block px-0'>
                    <img src={image1}
                        alt="poster" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}
