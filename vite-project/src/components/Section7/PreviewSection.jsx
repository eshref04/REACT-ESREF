import React from "react";
import Quot from "../../assets/quot.png";
import "./PreviewSection.css";
import UserImg from "../../assets/2 (1).jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const PreviewSection = () => {

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }]
  };


  return (
    <section className="preview__section">
      <div className="container">
        <div className="preview__section__head">
          <h5>CLIENTS REVIEW</h5>
          <h2>My testomonial</h2>
        </div>

        

        <div className="slider-container">
          <Slider {...settings}  >
            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={UserImg} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Mottili</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="content">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={Quot} alt="" />
              </div>
            </div>

            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={UserImg} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Mottili</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="content">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={Quot} alt="" />
              </div>
            </div>

            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={UserImg} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Mottili</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="content">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={Quot} alt="" />
              </div>
            </div>

            <div className="previewsectioncardscrd">
              <div className="previewsectioncardsimg">
                <img src={UserImg} alt="" />
              </div>

              <div className="previewsectioncardscrdicon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div className="previewsectioncardscrdhead">
                <h3>Mottili</h3>
                <h5>Marketing Coordinator</h5>
              </div>

              <div className="previewsectioncardscrdcontent">
                <p className="content">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
                <img width="50px" height="35px" src={Quot} alt="" />
              </div>
            </div>
     
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
