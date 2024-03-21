import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/theme.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/fonts/flat-font-icons/css/flaticon.css";
import "./assets/fonts/fontello-icons/fontello.css";
import "./assets/libs/bootstrap-icons/font/bootstrap-icons.css";
import "./assets/libs/jquery-ui/dist/themes/base/jquery-ui.min.css";
import "./assets/libs/magnific-popup/dist/magnific-popup.css";
import "./assets/libs/nouislider/dist/nouislider.min.css";
import "./assets/libs/tiny-slider/dist/tiny-slider.css";
import Home from "./Components/Modules/Home";
import About from "./Components/Modules/About";
import Contact from "./Components/Modules/Contact";
import Blog from "./Components/Modules/Blog";
import Loan from "./Components/Modules/Loan";
import StudentLoan from "./Components/Modules/StudentLoan";
import HomeLoan from "./Components/Modules/HomeLoan";
import BusinessLoan from "./Components/Modules/BusinessLoan";
import PersonalLoan from "./Components/Modules/PersonalLoan";
import CarLoan from "./Components/Modules/CarLoan";
import Footer from "./Common/Footer";
import EducationLoan from "./Components/Modules/EducationLoan";
import Navbar from "./Common/Navbar";
import Gallery from "./Components/Modules/Gallery";
import Career from "./Components/Modules/Career";
import Login from "./Components/Modules/Login";
import Admin from "./Components/Modules/Admin";
import Agent from "./Components/Modules/Agent";
import Termcondation from "./Components/Modules/Termcondation";
import UserDashbord from "./Components/Modules/UserDashbord";
import Email from "./Components/Modules/Admin/Email";
import History from "./Components/Modules/Admin/History";
import PendingWork from "./Components/Modules/Admin/PendingWork";
import UserData from "./Components/Modules/Admin/UserData";
import Intrestrate from "./Components/Modules/Admin/Intrestrate";
import Testmonial from "./Components/Modules/Admin/Testmonial";
import GalleryImages from "./Components/Modules/Admin/GalleryImages";
import Sendblog from "./Components/Modules/Admin/Sendblog";
import BankForm from "./Components/Modules/UserDashbord/BankForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfessionalLoan from "./Components/Modules/ProfessionalLoan";
import GoldLoan1 from "./Components/Modules/GoldLoan1";

import Buttone from "./Components/Modules/Buttone";
import UserDashboard from "./Components/Modules/UserDashbord";
import Status from "./Components/Modules/UserDashbord/Status";
import SupportForm from "./Components/Modules/UserDashbord/SupportForm";
import Sidebar from "./Components/Modules/UserDashbord/Sidebar";
import HomeServices from "./Components/Modules/UserDashbord/HomeServices";
import FormDetailTable from "./Components/Modules/UserDashbord/FormDetailTable";
import FormModel from "./Components/Modules/UserDashbord/FormModel";

function App() {
  console.log("userloggedin" + " = " + localStorage.getItem("isLoggedIn"))
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeloan" element={<HomeLoan />} />
        <Route path="/businessloan" element={<BusinessLoan />} />
        <Route path="/carloan" element={<CarLoan />} />
        <Route path="/educationloan" element={<EducationLoan />} />
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/studentloan" element={<StudentLoan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashbord" element={<UserDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/agent" element={<Agent />} />

        <Route path="/Termcondation" element={<Termcondation />} />

        {/* AdminRoutes */}
        <Route path="/adminEmail" element={localStorage.getItem("isLoggedIn") ? <Email /> : <Login />} />
        <Route path="/adminHistor" element={localStorage.getItem("isLoggedIn") ? <History /> : <Login />} />
        <Route path="/adminPending" element={localStorage.getItem("isLoggedIn") ? <PendingWork /> : <Login />} />
        <Route path="/adminUserData" element={localStorage.getItem("isLoggedIn") ? <UserData /> : <Login />} />
        <Route path="/intrestrate" element={localStorage.getItem("isLoggedIn") ? <Intrestrate /> : <Login />} />
        <Route path="/testmonial" element={localStorage.getItem("isLoggedIn") ? <Testmonial /> : <Login />} />
        <Route path="/galleryimages" element={localStorage.getItem("isLoggedIn") ? <GalleryImages /> : <Login />} />
        <Route path="/bankform" element={localStorage.getItem("isLoggedIn") ? <BankForm /> : <Login />} />
        <Route path="/status" element={localStorage.getItem("isLoggedIn") ? <Status /> : <Login />} />
        <Route path="/support" element={localStorage.getItem("isLoggedIn") ? <SupportForm /> : <Login />} />
        <Route path="/sidebar" element={localStorage.getItem("isLoggedIn") ? <Sidebar /> : <Login />} />
        <Route path="/homeservices" element={localStorage.getItem("isLoggedIn") ? <HomeServices /> : <Login />} />
        <Route path="/sendblog" element={localStorage.getItem("isLoggedIn") ? <Sendblog /> : <Login />} />

        <Route path="/homeservices/formTable/:endpoint" element={localStorage.getItem("isLoggedIn") ? <FormDetailTable /> : <Login />} />


        <Route path="/formModel/:endpoint/:formid" element={<FormModel></FormModel>}/>

      
        <Route path="/professionalloan" element={<ProfessionalLoan/>}/>
        <Route path="/goldloan1" element={<GoldLoan1/>}/>
      

        <Route path="/button" element={<Buttone />} />




      </Routes>
      <Footer />
    </>
  );
}

export default App;
