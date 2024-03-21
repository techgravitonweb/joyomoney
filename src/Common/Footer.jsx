import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logoimg from "../assets/images/brand/logo/logoimg.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer bg-dark pt-8">
        <div className="container">
          {"        "}
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
              <div className="mb-4 mb-lg-0">
                {"                            "}
                <img
                  alt="Borrow  - Loan Company Website Templates"
                  src={Logoimg}
                  className="logo-img"
                />
              </div>
              {"                      "}
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <form
                action="https://easetemplate.com/borrow/newsletter.php"
                className="row g-0 align-items-center"
                method="post"
              >
                <div className="col-md-4 col-12 mb-3 mb-md-0">
                  <h3 className="text-white mb-0">Signup Our Newsletter</h3>
                </div>

                <div className="col-md-8 col-12">
                  <div className="input-group">
                    <input
                      aria-describedby="basic-addon2"
                      className="form-control border-0 shadow-none"
                      id="newsletter"
                      placeholder="Write email address"
                      required
                      type="email"
                    />

                    <a className="btn btn-primary" href="#" id="basic-addon2">
                      Go!
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <hr className="my-6 opacity-25" />

          <div className="row mb-8">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="text-white-50 mb-3">
                <p>
                  Our goal at JoyoMoney is to provide access to Personal Loans
                  and Education Loan, Car Loan, Home Loan at insight competitive
                  interest rates . We are the financial service provider, you
                  can use our Financiial product.
                </p>

                <div className="row mt-6">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="d-flex">
                      <svg
                        className="bi bi-geo-alt text-white mt-1"
                        fill="currentColor"
                        height="28"
                        viewBox="0 0 16 16"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />

                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>

                      <div className="ms-3">
                      NO.45, VRAJBHOOMI B/H. POST OFFICE BAYAD - ARAVALLI - 383325 India
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3 mt-md-0">
                    <div className="d-flex">
                      <svg
                        className="bi bi-telephone text-white mt-1"
                        fill="currentColor"
                        height="20"
                        viewBox="0 0 16 16"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>

                      <div className="ms-3 fs-3">02269620449</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="mb-3">
                {"                            "}
                <ul className="list-unstyled text-muted">
                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Home
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/gallery">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Gallery
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/about">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      About Us
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/termcondation">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Privacy Policy
                    </a>
                  </li>
                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/termcondation">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Term & Condation
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/contact">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Contact Us
                    </a>
                  </li>
                  {"              "}
                </ul>
              </div>
              {"                      "}
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="mb-3">
                {"                            "}
                <ul className="list-unstyled text-muted">
                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/carloan">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Car Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/personalloan">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Personal Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/goldloan">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Gold Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/businessloan">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Business Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/homeloan">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Home Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="/studentloan">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Student Loan
                    </a>
                  </li>
                  {"              "}
                </ul>
              </div>
              {"                      "}
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="mb-3">
                {/* widget footer */}
                <ul className="list-unstyled text-muted">
                  <li className="d-flex">
                    <a href="#!" className="text-inherit">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="me-2 fs-5"
                      />
                      Facebook
                    </a>
                  </li>
                  <li className="d-flex">
                    <a href="#!" className="text-inherit">
                      <FontAwesomeIcon icon={faGoogle} className="me-2 fs-5" />
                      Google
                    </a>
                  </li>
                  <li className="d-flex">
                    <a href="#!" className="text-inherit">
                      <FontAwesomeIcon icon={faTwitter} className="me-2 fs-5" />
                      Twitter
                    </a>
                  </li>
                  <li className="d-flex">
                    <a href="#!" className="text-inherit">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="me-2 fs-5"
                      />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.widget footer */}
            </div>
            {"        "}
          </div>
          {"        "}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <p className="fs-6 text-muted">
                        © Copyright 2023 | JoyoMoney 
                {"            "}
                {/* © Copyright 2023 | Joyoglobe Technologies LLP */}
              </p>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-md-end">
              <p className="fs-6 text-muted">
                {"              "}
                <a className="text-inherit" href="/termcondation">
                  Terms of use
                </a>{" "}
                |{"              "}
                <a className="text-inherit" href="/termcondation">
                  Privacy Policy
                </a>
              </p>
            </div>
            {"        "}
          </div>
          {"      "}
        </div>
        {"    "}
      </div>
    </>
  );
};

export default Footer;
