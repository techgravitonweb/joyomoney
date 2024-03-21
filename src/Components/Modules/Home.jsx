import React, { useEffect, useRef, useState } from "react";

import { tns } from "tiny-slider/src/tiny-slider";
import "../../assets/css/theme.min.css";
import "../../assets/fonts/flat-font-icons/css/flaticon.css";
import "../../assets/fonts/fontello-icons/fontello.css";
import "../../assets/libs/bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/libs/jquery-ui/dist/themes/base/jquery-ui.min.css";
import "../../assets/libs/magnific-popup/dist/magnific-popup.css";
import "../../assets/libs/nouislider/dist/nouislider.min.css";
import "../../assets/libs/tiny-slider/dist/tiny-slider.css";
import "@fortawesome/fontawesome-free/css/all.css";
import photos from './photos';
// console.log(photos);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Logoimg from "../../assets/images/brand/logo/logo.svg";
import Mortgageimg from "../../assets/images/svg/mortgage.svg";
import Loanimg from "../../assets/images/svg/loan.svg";
import Carimg from "../../assets/images/svg/car.svg";
import Creditcard from "../../assets/images/svg/credit-card.svg";
import Loanimg2 from "../../assets/images/svg/loan.svg";
import Mortgageimg2 from "../../assets/images/svg/mortgage.svg";
import Piggyimg from "../../assets/images/svg/piggy-bank.svg";
import Avatarimg from "../../assets/images/avatar/avatar-1.jpg";
import Avatarimg2 from "../../assets/images/avatar/avatar-2.jpg";
import Avatarimg3 from "../../assets/images/avatar/avatar-4.jpg";
import Logoimg2 from "../../assets/images/brand/company-logo/logo-1.jpg";
import Logoimg3 from "../../assets/images/brand/company-logo/logo-2.jpg";
import Logoimg4 from "../../assets/images/brand/company-logo/logo-3.jpg";
import Logoimg5 from "../../assets/images/brand/company-logo/logo-4.jpg";
import Logoimg6 from "../../assets/images/brand/company-logo/logo-5.jpg";
import Blogimg1 from "../../assets/images/blog/blog-img.jpg";
import Blogimg2 from "../../assets/images/blog/blog-img-1.jpg";
import Blogimg3 from "../../assets/images/blog/blog-img-2.jpg";
import Ftlogoimg from "../../assets/images/brand/company-logo/ft-logo.png";
import {
  getBannerList,
  getLoansList,
  getTestimonialsList,
} from "../../Services/com_service";

const Home = () => {
  console.log(photos);
  const [bannerData, setBannerData] = useState([]);
  const [loans, seLoans] = useState([]);
  const [testimonials, seTestimonials] = useState([]);
  const [images, setImages] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [testimonialData, setTestimonialData] = useState([])

  useEffect(() => {
    // Initialize the Tiny Slider
    const slider = tns({
      container: ".sliderFirst",
      items: 1,
      controlsContainer: "#sliderFirstControls",
      prevButton: ".prev",
      nextButton: ".next",
    });
    // document.querySelector(".tns-nav").style.display = "none";
    // Clean up on component unmount
    return () => {
      // slider.destroy();
    };
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/getNotification",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }

          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setApiData(data.notifications);
        console.log("API Data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/getTestimonials",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }

          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTestimonialData(data.images);
        console.log("API Data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  useEffect(() => {
    setTimeout(() => {
      openPopup();
    }, 2000);
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    getBannerData();
    getTestimonials();
    getLoans();
    // getImages();
  }, []);

  async function getBannerData() {
    const response = await getBannerList();
    if (response.status) {
      const data = response.data;
      console.log(response);
      setBannerData(data);
    }
  }

  async function getLoans() {
    const response = await getLoansList();
    if (response.status) {
      const data = response.data;
      console.log(response);
      seLoans(data);
    }
  }

  async function getTestimonials() {
    const response = await getTestimonialsList();
    if (response.status) {
      const data = response.data;
      console.log(response);
      seTestimonials(data);
    }
  }


  return (
    <>
      {/* {showPopup && (
        <div className="">
          <div className="popup " onClick={closePopup}>
            <div
              className="popup-content container h-50"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <h2>API Data</h2>
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
          </div>
        </div>
      )} */}

      {showPopup && (
        <div className="modal fade show d-flex align-items-center" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered w-100 h-100" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">API Data</h5>
                <button type="button" className="close" onClick={closePopup}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {apiData && apiData.map((notification, index) => (
                  <h5 key={index}>{index + 1}. {notification.content}<span> <p>{(new Date(notification.createdAt).toLocaleDateString())} </p></span><p>{(new Date(notification.createdAt).toLocaleTimeString())} </p> </h5>

                ))}
              </div>

            </div>
          </div>
        </div>
      )}


      <main>
        <section>
          <div className="position-relative">
            <ul className="controls" id="sliderFirstControls">
              <li className="prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </li>

              <li className="next">
                <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </ul>

            <div className="sliderFirst">
              {bannerData &&
                bannerData.map((item) => {
                  <div className="item" key={item._id}>
                    <div className="py-20 home-banner-one">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div>
                              <h1 className="display-3 text-white fw-bold mb-3">
                                {item._id}
                                Personal Loan to Suit Your Needs.
                              </h1>
                              <p className="text-white d-none d-xl-block d-lg-block d-sm-block">
                                The low rate you need for the need you want!
                                Call
                                <br />
                                <strong>02269620449</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>;
                })}

              {photos && photos.map((image, index) => (
                <div className="item" key={index}>
                  <div className="py-20 ">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div>
                            {/* {image.path} */}
                            <img src={image} alt="image does not found" width="570" height="480" />
                            <h1 className="display-3 text-white fw-bold mb-3">
                              Lowest Car Loan Rate
                            </h1>
                            <p className="text-white d-none d-xl-block d-lg-block d-sm-block">
                              We provide an excellent service Loan company. Lorem
                              ipsum simple dummy content goes here.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="item">
                <div className="py-20 home-banner-three">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div>
                          <h1 className="display-3 text-white fw-bold mb-3">
                            Loan with Great Rates.
                          </h1>
                          <p className="text-white d-none d-xl-block d-lg-block d-sm-block">
                            We provide an excellent service for all types of
                            loans in <br />
                            {"                          "}ahmedabad and offer
                            service, advice and direction.
                            {"                        "}
                          </p>
                          {"                        "}

                          {"                      "}
                        </div>
                        {"                                          "}
                      </div>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="bg-white smooth-shadow-sm">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Mortgageimg}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    <h2 className="mb-0 fw-bold">
                      {loans[0]?.loan_percentage}
                    </h2>
                    <p className="mb-0">{loans[0]?.title}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Loanimg}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    <h2 className="mb-0 fw-bold">
                      {loans[1]?.loan_percentage}
                    </h2>
                    <p className="mb-0">{loans[1]?.title}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Carimg}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    <h2 className="mb-0 fw-bold">
                      {loans[2]?.loan_percentage}
                    </h2>
                    <p className="mb-0">{loans[2]?.title}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Creditcard}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    <h2 className="mb-0 fw-bold">
                      {loans[3]?.loan_percentage}
                    </h2>
                    <p className="mb-0">{loans[3]?.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-lg-0 py-0">
          <div className="container">
            <div className="row"></div>
          </div>
        </section>
        <section className="py-lg-7 py-10 bg-white border-bottom border-top">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                <div className="mb-10 text-center">
                  <h1>Fast & Easy Application Process.</h1>
                  <p>
                    "Effortless start: Begin your application with a quick and
                    user-friendly online form." "Minimal paperwork: Enjoy a
                    hassle-free experience with straightforward documentation."
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                {"              "}
                <div className="card text-center mb-6 mt-4">
                  <div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
                    {"                  "}
                    <span className="fs-3 fw-bold">1</span>
                  </div>

                  <div className="card-body p-6">
                    {"                  "}
                    <h3 className="mb-2">Choose Loan Amount</h3>
                    {"                  "}
                    <p className="mb-0">
                      Select the loan amount that suits your financial needs and
                      goals
                    </p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                {"              "}
                <div className="card text-center mb-6 mt-4">
                  <div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
                    {"                  "}
                    <span className="fs-3 fw-bold">2</span>
                  </div>

                  <div className="card-body p-6">
                    {"                  "}
                    <h3 className="mb-2">Approved Your Loan</h3>
                    {"                  "}
                    <p className="mb-0">
                      Approval confirmed! You're now set to access the fund
                      approved loan
                    </p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                {"              "}
                <div className="card text-center mb-6 mt-4">
                  <div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
                    {"                  "}
                    <span className="fs-3 fw-bold">3</span>
                  </div>

                  <div className="card-body p-6">
                    {"                  "}
                    <h3 className="mb-2">Get Your Cash</h3>
                    {"                  "}
                    <p className="mb-0">
                      Your wait is over – the funds you need are now at your
                      fingertips.
                    </p>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg- py-8 ">
          <div className="container">
            <div className="row">
              <div className="">
                {"              "}
                <div className="mb-10 px-3">
                  {"                                "}
                  <h1 className="mb-4 text-center">Why People Choose Us</h1>

                  <p className="text-center">
                    People choose us because we prioritize their financial
                    well-being with a commitment to excellence that sets us
                    apart. Our reputation for transparency, reliability, and
                    customer satisfaction precedes us, instilling confidence in
                    those seeking financial solutions. What distinguishes us is
                    not just our competitive offerings, but our unwavering
                    dedication to understanding the unique needs of each
                    individual. Our streamlined processes make the journey from
                    application to approval seamless and stress-free, and our
                    team is committed to providing personalized support at every
                    step. Whether it's the trust we've earned through consistent
                    service or the tailored assistance we provide, people choose
                    us as their financial partner because we go beyond
                    transactions to build lasting relationships based on
                    integrity and customer-centric values.
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row g-0">
              <div className="col-xl-4 col-md-4 col-12">
                {"              "}
                <div className="card text-center rounded-0">
                  <div className="card-body p-6">
                    {"                  "}
                    <div className="mb-4">
                      {"                    "}
                      <svg
                        className="bi bi-people text-primary"
                        fill="currentColor"
                        height="58"
                        viewBox="0 0 16 16"
                        width="58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h3>Dedicated Specialists</h3>
                    {"                  "}
                    <p className="mb-4 ">
                      Our dedicated specialists are the cornerstone of our
                      commitment to providing exceptional service. Trained to
                      understand the diverse needs of our clients, these experts
                      go beyond the ordinary to offer personalized solutions
                    </p>
                    {"                  "}
                  </div>
                  {""}
                </div>
              </div>

              <div className="col-xl-4 col-md-4 col-12">
                {"              "}
                <div className="card text-center rounded-0">
                  <div className="card-body p-6">
                    {"                  "}
                    <div className="mb-4">
                      {"                    "}
                      <svg
                        className="bi bi-trophy text-primary"
                        fill="currentColor"
                        height="58"
                        viewBox="0 0 16 16"
                        width="58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h3>Success Stories Rating</h3>
                    {"                  "}
                    <p className="mb-4">
                      Our success stories are not just narratives; they are
                      testimonials that reflect the satisfaction and triumphs of
                      our clients. Their success is our success, in consistently
                      earning high ratings for our services.
                    </p>
                    {"                  "}
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-md-4 col-12">
                {"              "}
                <div className="card text-center rounded-0">
                  <div className="card-body p-6">
                    {"                  "}
                    <div className="mb-4">
                      {"                    "}
                      <svg
                        className="bi bi-calculator text-primary"
                        fill="currentColor"
                        height="58"
                        viewBox="0 0 16 16"
                        width="58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        {"                      "}
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h3>No front Appraisal Fees!</h3>
                    {"                  "}
                    <p className="mb-4">
                      At our institution, we believe in transparency and
                      fairness. That's why we proudly declare: no upfront
                      appraisal fees! We understand that navigating financial
                      decisions can be challenging..
                    </p>
                    {"                  "}
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {"      "}
        <section className="bg-dark py-lg-10 py-10">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-10 text-center">
                  {"                                "}
                  <h1 className="text-white mb-2">
                    {"                  "}Some of our Awesome Testimonials &
                    Success Stories
                    {"                "}
                  </h1>

                  <p className="text-white text-white-50">
                    {"                  "}You won’t be the only one lorem ipsu
                    mauris diam mattises.{"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>


            {/* testimonials */}
            {/* <div className="row">
              <div className="col-md-4 col-12 mb-6 mb-lg-0">
                {"              "}
                <div className="card border-0">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                      “I loved the customer service you guys provided me. That
                      was very nice and patient with questions I had. I would
                      really like definitely come back here”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 text-white">Donny J. Griffin</h4>
                    <span className="fs-6 text-white-50 fw-bold">
                      Personal Loan
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-12 mb-6 mb-lg-0">
                <div className="card border-0">
                  <div className="card-body p-5">
                    {"                  "}
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                      {"                    "}“I had a good experience with
                      Insight Loan Services. I am thankful to insight for the
                      help you guys gave me. My loan was easy and fast. thank
                      you Insigtht”{"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="d-flex align-items-center mt-4">
                  <div className="ms-3 lh-1">
                    {"                  "}
                    <h4 className="mb-0 text-white">Mary O. Randle</h4>
                    {"                  "}
                    <span className="fs-6 text-white-50 fw-bold">
                      Education Loan
                    </span>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-md-4 col-12 mb-6 mb-lg-0">
                {"              "}
                <div className="card border-0">
                  <div className="card-body p-5">
                    {"                  "}
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                      {"                    "}“We came out of their offices very
                      happy with their service. They treated us very kind.
                      Definite will come back. The waiting time was very
                      appropriate.”{"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="d-flex align-items-center mt-4">
                  <div className="ms-3 lh-1">
                    {"                  "}
                    <h4 className="mb-0 text-white">Lindo E. Olson</h4>
                    {"                  "}
                    <span className="fs-6 text-white-50 fw-bold">Car Loan</span>
                  </div>
                  {"              "}
                </div>
              </div>
            </div> */}
            <div className="row">
              {Array.isArray(testimonialData) && testimonialData.map((item) => (
                <div className="col-md-4 col-12 mb-6 mb-lg-0">
                  {"              "}
                  <div className="card border-0">
                    <div className="card-body p-5">
                      <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                        {item?.testimonial}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <div className="ms-3 lh-1">
                      <h4 className="mb-0 text-white">{item?.name}</h4>
                      <span className="fs-6 text-white-50 fw-bold">
                        Personal Loan
                      </span>
                    </div>
                  </div>
                </div>

              ))}

            </div>
            {/* testimonials */}
            {console.log("testimonialData", testimonialData)}


            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <div className="py-4 bg-white shadow-sm">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg2}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg3}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg4}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg5}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg6}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg2}
                />
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </div>
        {"      "}
        <section className="py-lg-10 py-10">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-10 text-center">
                  {"                                "}
                  <h1 className="mb-1">Latest News from Loan Company</h1>

                  <p>
                    {"                  "}Our mission is to deliver reliable,
                    latest news and opinions.{"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-4 mb-lg-0">
                  <div>
                    {"                  "}
                    <a href="blog-single.html">
                      <img
                        alt="Borrow - Loan Company Website Template"
                        className="img-fluid rounded-top-md"
                        src={Blogimg1}
                      />
                    </a>
                  </div>

                  <div className="card-body p-5">
                    {"                  "}
                    <h3 className="mb-2">
                      {"                    "}
                      <a className="text-inherit" href="blog-single.html">
                        Couples Buying New Home Loan
                      </a>
                      {"                  "}
                    </h3>
                    {"                  "}
                    <p className="fs-6 text-uppercase fw-bold">
                      {"                    "}
                      <span className="border-end pe-2 me-2 border-2">
                        Augest 25, 2022
                      </span>
                      <span>
                        By
                        <a href="#!"> Admin</a>
                      </span>
                      {"                  "}
                    </p>
                    {"                  "}
                    <p>
                      {"                    "}Fusce sed erat libasellus id orci
                      quis ligula pret do lectus velit, a malesuada urna sodales
                      eu.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="blog-single.html"
                    >
                      Read More
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-4 mb-lg-0">
                  <div>
                    {"                  "}
                    <a className="imghover" href="blog-single.html">
                      <img
                        alt="Borrow - Loan Company Website Template"
                        className="img-fluid"
                        src={Blogimg2}
                      />
                    </a>
                  </div>

                  <div className="card-body p-5">
                    {"                  "}
                    <h3>
                      {"                    "}
                      <a className="text-inherit" href="blog-single.html">
                        Business Man Thinking for Loan
                      </a>
                      {"                  "}
                    </h3>
                    {"                  "}
                    <p className="fs-6 text-uppercase fw-bold">
                      {"                    "}
                      <span className="border-end pe-2 me-2 border-2">
                        Aug 24, 2022
                      </span>
                      <span>
                        By
                        <a href="#!"> Admin</a>
                      </span>
                      {"                  "}
                    </p>
                    {"                  "}
                    <p>
                      {"                    "}Nulla vehicula nibh vel malesuada
                      dapibus ringilla nunc mi sit amet fbendum sapierttitor
                      nibh.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="blog-single.html"
                    >
                      Read More
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-4 mb-lg-0">
                  <div>
                    {"                  "}
                    <a className="imghover" href="blog-single.html">
                      <img
                        alt="Borrow - Loan Company Website Templates"
                        className="img-fluid"
                        src={Blogimg3}
                      />
                    </a>
                  </div>

                  <div className="card-body p-5">
                    {"                  "}
                    <h3>
                      {"                    "}
                      <a className="text-inherit" href="blog-single.html">
                        Are you students looking for loan ?
                      </a>
                      {"                  "}
                    </h3>
                    {"                  "}
                    <p className="fs-6 text-uppercase fw-bold">
                      {"                    "}
                      <span className="border-end pe-2 me-2 border-2">
                        Aug 23, 2022
                      </span>
                      <span>
                        By
                        <a href="#!"> Admin</a>
                      </span>
                      {"                  "}
                    </p>
                    {"                  "}
                    <p>
                      {"                    "}Malesuada urna sodales euusce sed
                      erat libasellus id orci quis ligula pretium co ctus velit.
                      {"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="blog-single.html"
                    >
                      Read More
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="py-lg-10 py-10 bg-white border-top">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-sm-12 col-12">
                {"              "}
                <div className="mb-8 text-center">
                  {"                                "}
                  <h1 className="mb-1">We are Here to Help You</h1>

                  <p>
                    We are here to help you navigate your financial journey with
                    confidence and ease. Our dedicated team is committed to
                    providing the support and assistance you need, whether you
                    have questions, require guidance, or are ready to explore
                    our services. Whatever your financial aspirations may be,
                    we're here to help you every step of the way.
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    {"                  "}
                    <div className="mb-6">
                      {"                    "}
                      <svg
                        className="bi bi-calendar3 text-primary"
                        fill="currentColor"
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        {"                      "}
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      {"                    "}Apply For Loan
                      {"                  "}
                    </h4>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Looking to loan? then apply for
                      loan now.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="/contact"
                    >
                      Get Appointment
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    {"                  "}
                    <div className="mb-6">
                      {"                    "}
                      <svg
                        className="bi bi-telephone text-primary"
                        fill="currentColor"
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      Call us at
                    </h4>
                    {"                  "}
                    <h2 className="fs-3 mb-0">02269620449</h2>
                    {"                  "}
                    <p>
                      <a className="fs-5" href="#">
                        Info@joyoglobe.com
                      </a>
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="/contact"
                    >
                      Contact us
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    {"                  "}
                    <div className="mb-6">
                      {"                    "}
                      <svg
                        className="bi bi-people text-primary"
                        fill="currentColor"
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      {"                    "}Talk to Advisor
                      {"                  "}
                    </h4>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Need to loan advise? Talk to our
                      Loan advisors.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="/contact"
                    >
                      Meet The Advisor
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"    "}
      </main>
    </>
  );
};

export default Home;
