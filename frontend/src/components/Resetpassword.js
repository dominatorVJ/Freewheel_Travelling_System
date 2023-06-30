import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import image1 from './images/image1.png'
import logo from './images/logoicon.png'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';

export const Resetpassword = (props) => {
    const [credentials, setCredentials] = useState({ password: "", cpassword: "" });
    const [crederrors, setCrederrors] = useState({ password: "", cpassword: "" });
    const [flag, setFlag] = useState(0)
    const [show, setShow] = useState(0)
    const location = useLocation()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {}

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

        setCrederrors(errors);
        if (Object.keys(errors).length === 0) {
            const response = await fetch("http://localhost:5000/user/resetpassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: credentials.password,
                    resetToken: location.pathname.split('/')[2]
                }),
            });
            const json = await response.json();
            if (json.success) {
                setFlag(1)
            } else {
                alert(json.message);
            }
        }
    };
    const func = (e) => {
        (show) ? setShow(0) : setShow(1)
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    if (!flag) {
        return (
            <MDBContainer fluid>
                <MDBRow>

                    <MDBCol sm='5' style={{ backgroundColor: "#ffffff" }}>

                        <div className='d-flex flex-row ps-5 pt-5 mx-3'>
                            <img src={logo} style={{ width: '200px' }} alt="logo" />
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                            <h3 className="fw-bold mb-3 ps-5 pb-3 mx-3" style={{ letterSpacing: '1px' }}>Reset password</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='input-group container mb-4 mx-5'>
                                    <input type={`${(show) ? "text" : "password"}`} className="w-75 fs-5 form-control" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password" />
                                    <span type='submit' className="input-group-text" onClick={func}><i className={`bi bi-eye${(show) ? "" : "-slash"}`}></i></span>
                                    {crederrors.password && <p style={{ color: 'red' }}>{crederrors.password}</p>}
                                </div>
                                <div className='input-group container mb-4 mx-5'>
                                    <input type={`${(show) ? "text" : "password"}`} className="w-75 fs-5 form-control" value={credentials.cpassword} onChange={onChange} id="cpassword" name="cpassword" placeholder="Confirm Password" />
                                    <span type='submit' className="input-group-text" onClick={func}><i className={`bi bi-eye${(show) ? "" : "-slash"}`}></i></span>
                                    {crederrors.cpassword && <p style={{ color: 'red' }}>{crederrors.cpassword}</p>}
                                </div>
                                <div className='container mb-4 mx-5'>
                                    <button type="submit" className="btn fs-5 w-100 btn-primary">Reset</button>
                                </div>
                            </form>
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
    else {
        return (
            <MDBContainer fluid>
                <MDBRow>

                    <MDBCol sm='5' style={{ backgroundColor: "#ffffff" }}>

                        <div className='d-flex flex-row ps-5 pt-5 mx-3'>
                            <img src={logo} style={{ width: '200px' }} alt="logo" />
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                            <i className="bi bi-shield-fill-check display-4 text-center" style={{ color: 'blue' }}></i>
                            <p className="text-center fs-5">Your Password is reset.</p>
                            <br></br>
                            <p className='fw-normal' style={{ marginLeft: "60px" }}>Already have an account? <a href="/login" className="link-primary">Login</a></p>
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

}
