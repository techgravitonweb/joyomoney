import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      // const response = await axios.post("http://localhost:3000/auth/login", {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        email: formData.email,
        password: formData.password,
        // userType: "user",
      });
      console.log(response);

      if (response.status === 200) {
        const data = response.data.user;
        setTimeout(() => {
          navigate("/sidebar");
        }, 1500)
        localStorage.setItem("isLoggedIn", true);
        toast(data.message, "success");


      } else {
        toast(response.data.message, "error");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <>
      <section className="py-lg-12 py-10 bg-light">
        <div className="container ">
          <div className=" mx-auto py-10 ">
            <div className=" col-lg-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12 mx-auto">
              <div className="card card-body border-0 bg-white px-4">
                <h3 className="mb-3 text-center">Login Here</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    {/* <p>User Name</p> */}
                    <p className="mb-1">E-Mail</p>
                    <label className="form-label sr-only" htmlFor="email">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      className="form-control mt-1"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p className=" mb-1"> Password</p>
                    <label className="form-label sr-only" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="form-control mt-1"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-4">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
