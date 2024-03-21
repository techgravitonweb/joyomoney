import React, { useEffect, useState } from "react";
import "./About.css";
import Mansonryimg1 from "../../assets/images/background/masonry-1.jpg";
import Mansonryimg2 from "../../assets/images/background/masonry-2.jpg";
import Mansonryimg3 from "../../assets/images/background/masonry-3.jpg";
import Mansonryimg4 from "../../assets/images/background/masonry-4.jpg";
import Mansonryimg5 from "../../assets/images/background/masonry-5.jpg";
import Mansonryimg6 from "../../assets/images/background/masonry-6.jpg";
import { getGalleryData } from "../../Services/com_service";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  async function getTestimonials() {
    const response = await getGalleryData();
    if (response.status) {
      const data = response.data;
      console.log(response);
      setGallery(data);
    }
  }

  console.log("gallery", gallery);

  return (
    <>
      <main>
        <section className="pt-18 pb-10 galary-header-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <h1 className="mb-0">Gallery Filterable</h1>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
                        <a href="/contact" className="btn btn-primary">
                          How To Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* content start */}
        <div>
          <div className="container">
            <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm p-5">
              <div className="row" data-isotope='{"layoutMode": "masonry"}'>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg1}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg2}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg3}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg4}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg1}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg6}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg2}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg6}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-4">
                  <a href="#!">
                    <img
                      src={Mansonryimg1}
                      alt="..."
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.content end */}
      </main>
    </>
  );
};

export default Gallery;
