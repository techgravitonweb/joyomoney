import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";


import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logoimg from "../assets/images/brand/logo/logoimg.jpeg";


const Navbar = () => {

  return (
    <>
  
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
  <Link class="navbar-brand " to="/">
    <img src={Logoimg} className="logo-img"/>
    </Link>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
   
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item dropdown">
      
          <Link class="nav-link " to="/loan" id="navbarDropdownMenuLink" role="but" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
            Loans <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/homeloan">Home Loan</a></li>
            <li><a class="dropdown-item" href="/carloan">Car Loan</a></li>
            <li><a class="dropdown-item" href="/businessloan">Business Loan</a></li>
            <li><a class="dropdown-item" href="/personalloan">Personal Loan</a></li>
            <li><a class="dropdown-item" href="/professionalloan">Professional Loan</a></li>
            <li><a class="dropdown-item" href="/goldloan1"> Gold Loan</a></li>
            <li><a class="dropdown-item" href="/studentloan">School/College Loan</a></li>


          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
         
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/career">Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;

