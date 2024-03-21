import React, { useState } from "react";
import "./admin.css";
import Sidebar from "../UserDashbord/Sidebar";
import axios from "axios";

const Sendblog = () => {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    category: "",
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata2 = new FormData();
    formdata2.append('image', image);
    console.log(formData, image);

    if (formData) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/sendblog",
          formData
        );
        if (response.data) {
          try {
            const response1 = await axios.post(
              `http://localhost:8000/api/v1/uploadImage/${response.data.id}`,
              formdata2
            );
            if (response1.data) {
              alert(response1.data.message);
              setImage(null);
              setFormData({
                heading: "",
                description: "",
                category: "",
              });
              // Fetch the updated list of images
            } // Handle the response, e.g., show a success message
          } catch (error) {
            console.error(error);
          }

          // Fetch the updated list of images
        } // Handle the response, e.g., show a success message
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("please select the image");
    }



  };
  




  return (
    <Sidebar>
      <section className="">
        <div className="container">
          <div className=" col-lg-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
            <h2 className="text-center">Blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <label htmlFor="email mb-2">Heading:</label>
                <input
                  id="email"
                  name="heading"
                  type="text"
                  className="form-control border-primary mb-2"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                <label htmlFor="content">Description:</label>
                <textarea
                  id="content"
                  name="description"
                  className="border-primary"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                ></textarea>

              </div>
              <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="">
                  <label htmlFor="content">Category:</label>
                  <select name="category" id="" onChange={handleInputChange}>
                    <option value="Homeloan">Homeloan</option>
                    <option value="Homeloan">Homeloan</option>
                    <option value="Homeloan">Homeloan</option>
                    <option value="Homeloan">Homeloan</option>
                  </select>
                </form>
              </div>
              <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <label htmlFor="selectedImage ">Select Image:</label>
                <input
                  type="file"
                  id="selectedImage"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Send
              </button>
            </form>
          </div>
          <div>
          </div>
        </div>
      </section>
    </Sidebar>
  );
};

export default Sendblog;
