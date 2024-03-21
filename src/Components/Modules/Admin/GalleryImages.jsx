import React, { useState, useEffect, useRef } from "react";
import "./galleryimg.css";
import Sidebar from "../UserDashbord/Sidebar";
import axios from "axios";

const GalleryImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleImageChange = (file) => {
    setSelectedImage(file);
  };
  const inputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    let bodyContent = new FormData();

    if (selectedImage) {
      bodyContent.append("image", selectedImage);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/uploadImage",
          bodyContent
        );
        if (response) {
          alert(response.data.message);
          setSelectedImage(null);
          // Fetch the updated list of images
          fetchImages();
        } // Handle the response, e.g., show a success message
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("please select the image");
    }
    // Reset the selected image
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/getImages"
      );
      if (response) {
        setImages(response.data.images);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (imageId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/deleteImage/${imageId}`);
      setImages(images.filter((image) => image._id !== imageId));
    } catch (error) {
      console.error(error);
    }
  };
  console.log(images);
  return (
    <>
      <Sidebar>
        <section className="">
          <div className="image-form-container">
            <h1>Image Input Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-4">
                <label htmlFor="selectedImage ">Select Image:</label>
                <input
                  type="file"
                  id="selectedImage"
                  accept="image/*"
                  ref={inputRef}
                  onChange={(e) => handleImageChange(e.target.files[0])}
                />
              </div>
              <button type="submit" className="buttonUSer">
                Submit
              </button>
            </form>
          </div>
          <h1 style={{ marginTop: "3rem" }}>Uploaded Images</h1>
          <table style={{ marginBottom: "3rem" }} class="w3-table-all">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Image ID</th>
                <th>Date of Upload</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {images.length ? (
                images.map((image) => (
                  <tr key={image._id}>
                    <td>{image.fileName}</td>
                    <td>{image._id}</td>
                    <td>{new Date(image.uploadTime).toLocaleDateString()}</td>
                    <td>
                      <button
                        class="w3-button w3-red"
                        onClick={() => handleDelete(image._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <td>No images uploaded yet</td>
              )}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </>
  );
};

export default GalleryImages;
