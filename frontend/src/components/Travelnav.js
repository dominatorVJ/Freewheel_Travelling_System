import React from "react";
import { useLocation } from "react-router-dom";
export const Travelnav = () => {
  let location = useLocation();
  return (
    <div>
      <ul className="nav shadow p-1 mb-1 bg-body-tertiary justify-content-center nav-pills fs-3" style={{ width: "50%", margin: "auto" }}>
        <li className="nav-item">
          <a
            className={`nav-link ${location.pathname === "/" ? "active" : ""} `}
            aria-current="page"
            href="/"
          >
            <i className="fa-solid fa-plane"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${location.pathname === "/trains" ? "active" : ""
              } `}
            style={{ marginRight: "40px", marginLeft: "40px" }}
            href="/trains"
          >
            <i className="fa-solid fa-train"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${location.pathname === "/hotels" ? "active" : ""
              } `}
            href="hotels"
          >
            <i className="fa-solid fa-hotel"></i>
          </a>
        </li>
      </ul>
    </div >
  );
};
