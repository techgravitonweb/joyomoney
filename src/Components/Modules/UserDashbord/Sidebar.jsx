import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import About from "../About";

const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleItemClick = (path) => {
    // Close the drawer when an item is clicked
    setToggle(!toggle);
    // Navigate to the corresponding route
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/login")
  }
  return (
    <div className="container-fluid mt-15">
      <button className="toggle-button" onClick={handleToggle}>
        <i className={`bi image-sidebar ${toggle ? 'bi-arrow-left' : 'bi-arrow-right'} fs-4`} />
      </button>
      <div className="row mt-4">
        {toggle && (
          <div className="col-md-3 col-12 bg-white fixed">
            <div className="bg-white px-2">
              <div className="mt-3">
                <i className="bi bi-bootstrap-fill fs-4 me-3"></i>
                <span className="brand-name fs-4">LoanWebsite</span>
              </div>
              <hr className="text-dark" />
              <div className="list-group list-group-flush">
                {/* <Link
                  to="/adminUserData"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/adminUserData")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-speedometer2 fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Dashboard</span>
                  </div>
                </Link> */}
                <Link
                  to="/homeservices"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/homeservices")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-house fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Home</span>
                  </div>
                </Link>

                <Link
                  to="/status"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/status")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-table fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Status</span>
                  </div>
                </Link>
                <Link
                  to="/adminEmail"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/adminEmail")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Send Mail</span>
                  </div>
                </Link>

                <Link
                  to="/testmonial"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/testmonial")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Testimonial</span>
                  </div>
                </Link>

                <Link
                  to="/sendblog"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/testmonial")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Send blog</span>
                  </div>
                </Link>

                <Link
                  to="/galleryimages"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/galleryimages")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Gallery Images</span>
                  </div>
                </Link>
                <Link
                  to="/intrestrate"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/intrestrate")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-table fs-5 me-2"></i>
                    <span className="fs-5 fw-bold fs-3 text-bold">Interest Rate/Home Image PopUp</span>
                  </div>
                </Link>
                <Link
                  to="/login"
                  className="list-group-item list-group-item-action my-2"
                  onClick={() => handleItemClick("/login")}
                >
                  <div className="list-item-hover">
                    <i className="bi bi-power fs-5 me-2"></i>
                    <span onClick={handleLogout} className="fs-5 fw-bold fs-3 text-bold">Logout</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className={`col-${toggle ? '9' : '12'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
