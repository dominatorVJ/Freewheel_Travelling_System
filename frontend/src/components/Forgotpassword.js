import React, { useState } from 'react';
import image1 from './images/image1.png'
import logo from './images/logoicon.png'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';

export const Forgotpassword = (props) => {
    const [credentials, setCredentials] = useState({ email: "" });
    const [crederrors, setCrederrors] = useState({ email: "" });
    const [backendmessage, setBackendmessage] = useState("")
    const [flag, setFlag] = useState(0)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {}
        setBackendmessage("")
        if (credentials.email.trim() === '') {
            errors.email = 'This field is required.';
        } else if (!isValidEmail(credentials.email)) {
            errors.email = 'Invalid email format.';
        }

        setCrederrors(errors);
        if (Object.keys(errors).length === 0) {
            const response = await fetch("http://localhost:5000/user/forgotpassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: credentials.email
                }),
            });
            const json = await response.json();
            if (json.success) {
                setFlag(1)
            } else {
                setBackendmessage(json.message)
            }
        }
    };

    const isValidEmail = (email) => {
        // Implement your email validation logic here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

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

                            <h3 className="fw-bold mb-3 ps-5 pb-3 mx-3" style={{ letterSpacing: '1px' }}>Password recovery</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='container mb-4 mx-5 '>
                                    Enter your email that is registered to the account<br></br>
                                    <input type="text" className="w-100 fs-5 form-control" value={credentials.email} onChange={onChange} id="email" name="email" placeholder="Email" />
                                    {crederrors.email && <p style={{ color: 'red' }}>{crederrors.email}</p>}
                                    {backendmessage && <p style={{ color: 'red' }}>{backendmessage}</p>}
                                </div>
                                <div className='container mb-4 mx-5'>
                                    <button type="submit" className="btn fs-5 w-100 btn-primary">Continue</button>
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

                            <h3 className="fw-bold mb-3 ps-5 pb-3 mx-3" style={{ letterSpacing: '1px' }}>Password recovery</h3>
                            <i class="bi bi-envelope-check display-4 text-center" style={{ color: 'blue' }}></i>
                            <p className="text-center fs-5">Please check your inbox for further instruction to recover your password.</p>
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
