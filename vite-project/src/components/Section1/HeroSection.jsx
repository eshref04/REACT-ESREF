import React from "react";
import "./HeroSection.css";
import BannerImg from "../../assets/bannerimg.png";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__section__left">
          <div className="hero__section__head">
            <h1>
              Hi, I'M ASHRAF! <br /> CREATIVE <br />
              <span className="hero__section__head__span">CODER</span>
            </h1>
            <p>
              I'm a passionate UI/UX designer with a mission to create
              delightful and <br /> intuitive digital experiences. With a strong
              foundation in design principles and <br /> a keen eye for detail,
              I specialize in translating complex ideas into user- <br />
              friendly interfaces that captivate and engage.
            </p>
          </div>

          <div className="hero__section__btn">
            <a className="hero__section__btn__download" href="#">
              Download Cv <i class="fa-solid fa-download"></i>
            </a>
            <a className="hero__section__btn__play" href="#">
              <div className="hero__section__btn__play__icon">
                <i class="fa-sharp fa-solid fa-play"></i>
              </div>
              Watch The Video
            </a>
          </div>
        </div>

        <div className="hero__section__right">
          <div className="hero__section__right__img">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
