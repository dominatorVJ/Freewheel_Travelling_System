import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TicketContext from "./TicketContext";
import logo from "./images/logo.png";
import { FaCalculator, FaHistory, FaUserPlus } from "react-icons/fa";
import { TbArrowGuide } from "react-icons/tb";
export const Navbar = () => {
  let navigate = useNavigate()
  const context = useContext(TicketContext)
  const { myTicket } = context
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  const Travelhistory = (e) => {
    e.preventDefault()
    if (localStorage.getItem('token')) {
      myTicket()
      navigate('/travelhistory')
    }
    else {
      navigate('/login')
    }

  }
  let location = useLocation();
  return (
    <div style={{ marginTop: "60px" }}>
      <nav className="shadow bg-body-tertiary navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="img"
              style={{ display: "block", width: "120px" }}
              src={logo}
              alt="travelgo logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <b>
                  <Link
                    onClick={Travelhistory}
                    className={`nav-link ${
                      location.pathname === "/travelhistory" ? "active" : ""
                    } `}
                  >
                    Travel History&nbsp; <FaHistory />
                  </Link>
                </b>
              </li>
              <li className="nav-item">
                <b>
                  <Link
                    onClick={Travelhistory}
                    className={`nav-link ${
                      location.pathname === "/travelhistory" ? "active" : ""
                    } `}
                  >
                    Sathi &nbsp;
                    <TbArrowGuide />
                  </Link>
                </b>
              </li>
              <li>
                <b>
                  <Link
                    onClick={Travelhistory}
                    className={`nav-link ${
                      location.pathname === "/travelhistory" ? "active" : ""
                    } `}
                  >
                    Find Buddy&nbsp;
                    <FaUserPlus />
                  </Link>
                </b>
              </li>
              <li>
                <b>
                  <Link
                    onClick={Travelhistory}
                    className={`nav-link ${
                      location.pathname === "/travelhistory" ? "active" : ""
                    } `}
                  >
                    Budget &nbsp;
                    <FaCalculator />
                  </Link>
                </b>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex ms-auto">
                <Link
                  className={`mx-2 btn ${
                    location.pathname === "/login"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } `}
                  to="/login"
                  role="button"
                >
                  Signin
                </Link>
                <Link
                  className={`mx-2 btn ${
                    location.pathname === "/signup"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } `}
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-outline-primary"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
