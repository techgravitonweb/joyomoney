import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import './homeservices.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
const HomeServices = () => {
const [goldform,setGoldforms]=useState();
const [schoolForms,setSchoolForms]=useState();

// const [selectedUser, setSelectedUser] = useState(null);
// const [type, setType] = useState("");
// const [schoolforms, setSchoolforms] = useState([]);
// const [goldforms, setGoldforms] = useState([]);
const [professionalforms, setProfessionalforms] = useState([]);
const [personalforms, setPersonalforms] = useState([]);
const [homeforms, setHomeforms] = useState([]);
const [carforms, setCarforms] = useState([]);
const [businessforms, setBusinessforms] = useState([]);

console.log(goldform);
    useEffect(()=>{
        getAllGoldForms();
        getAllSchoolForms();
        getAllProfessionalForms();
        getAllPersonalForms();
        getAllHomeLoanForms();
        getAllCarLoanForms();
        getAllBusinessLoanForms();
    },[])
    const getAllGoldForms = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllGoldForms",
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
          // console.log(data.data);
          // console.log("data");
          setGoldforms(data.data);
          // this is usestate hook
        //   console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      const getAllSchoolForms = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllSchoolForms",
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
          console.log("gel school form",data.data);
          // console.log("data");
          // this is usestate hook
          setSchoolForms(data.data);
          console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      const getAllProfessionalForms = async () => {
        try {
          // "http://localhost:8000/api/v1/ProfessionalLoanForms",
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllProfessionalForms",
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
          console.log("Professional data responce",data.data);
          // console.log("data");
          // this is usestate hook
          setProfessionalforms(data.data);
          console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
      const getAllPersonalForms = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllPersonalForms",
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
          console.log(data.data);
          console.log("data");
          // this is usestate hook
          setPersonalforms(data.data);
          console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
    
      const getAllHomeLoanForms = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllHomeLoanForms",
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
          console.log(data.data);
          console.log("data");
          // this is usestate hook
          setHomeforms(data.data);
          console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
    
      const getAllCarLoanForms = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllCarLoanForms",
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
          console.log(data.data);
          console.log("data");
          // this is usestate hook
          setCarforms(data.data);
          console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
    
      const getAllBusinessLoanForms = async () => {
        try {
          const response = await fetch(
            "http://localhost:8000/api/v1/getAllBusinessLoanForms",
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
          console.log(data.data);
          console.log("data");
          // this is usestate hook
          setBusinessforms(data.data);
          console.log()
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  return (
    <>
    <Sidebar>
        <div className="container mt-5 ">
            <h2 className='text-primary'>All Services</h2>
            <div className="row mt-5">
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        <FontAwesomeIcon className='loanIcon' icon={faLandmark} />
                        Home Loan</h3>

                        <p className='mt-3'>
                        Home loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllHomeLoanForms'>
                        {/* <button  className="homeServices">Apply Now</button> */}
                        <button  className="homeServices">Total Applicants : {homeforms?.length}</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i className="fa-solid fa-car loanIcon"></i>
                        Car Loan</h3>

                        <p className='mt-3'>
                        Car loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllCarLoanForms'>
                        {/* <button  className="homeServices">Apply Now</button> */}
                        <button  className="homeServices">Total Applicants : {carforms?.length}</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-person loanIcon"></i>
                        Personal Loan</h3>

                        <p className='mt-3'>
                        Personal loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllPersonalForms'>
                        <button  className="homeServices">Total Applicants : {personalforms?.length}</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i className="fa-solid fa-user-tie loanIcon"></i>
                        Professional Loan</h3>

                        <p className='mt-3'>
                        Professional loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllProfessionalForms'>
                        <button  className="homeServices">Total Applicants : {professionalforms?.length}</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-business-time loanIcon"></i>
                        Business Loan</h3>

                        <p className='mt-3'>
                        Business loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllBusinessLoanForms'>
                        <button  className="homeServices">Total Applicants : {businessforms?.length}</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-coins loanIcon"></i>
                        Gold Loan</h3>

                        <p className='mt-3'>
                        Gold loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllGoldForms'>
                        {/* <button  className="homeServices">Apply Now</button> */}
                        <button  className="homeServices px-4">Total Applicants : {goldform?.length}</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-school loanIcon"></i>
                        School/College Loan</h3>

                        <p className='mt-3'>
                        School/College loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeservices/formTable/getAllSchoolForms'>
                        {/* <button  className="homeServices">Apply Now</button> */}
                        <button  className="homeServices">Total Applicants : {schoolForms?.length}</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
      </Sidebar>
    </>
  )
}

export default HomeServices