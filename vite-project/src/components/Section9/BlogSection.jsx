import React from "react";
import "./BlogSection.css";
import ImageOne from "../../assets/1.jpg";
import ImageTwo from "../../assets/2.jpg";
import ImageThree from "../../assets/3.jpg";

const BlogSection = () => {
  return (
    <section className="blog__section">
      <div className="container">
        <div className="blog__section__above">
          <div className="blog__section__head">
            <h5>MY BLOG</h5>
            <h2>
              Unlocking the potential of your <br />
              personal brand
            </h2>
          </div>
          <div className="blog__section__above__btn">
            <button>
              More Blog <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="blog__section__down">
          <div className="blog__section__down__image">
            <img src={ImageOne} alt="" />
            <div className="blog__section__down__desc">
              <ul className="blog__section__down__desc__list">
                <li>
                  <i class="fa-solid fa-user"></i> By admin
                </li>
                <li>
                  <i class="fa-solid fa-message"></i> Comments (05)
                </li>
              </ul>
              <a href="#">
                The standart personal My <br /> portfolio
              </a>

              <span>31 December,2022</span>
            </div>
          </div>

          <div className="blog__section__down__image">
            <img src={ImageTwo} alt="" />
            <div className="blog__section__down__desc">
              <ul className="blog__section__down__desc__list">
                <li>
                  <i class="fa-solid fa-user"></i> By admin
                </li>
                <li>
                  <i class="fa-solid fa-message"></i> Comments (05)
                </li>
              </ul>
              <a href="#">
                The standart personal My <br /> portfolio
              </a>

              <span>31 December,2022</span>
            </div>
          </div>

          <div className="blog__section__down__image">
            <img src={ImageThree} alt="" />
            <div className="blog__section__down__desc">
              <ul className="blog__section__down__desc__list">
                <li>
                  <i class="fa-solid fa-user"></i> By admin
                </li>
                <li>
                  <i class="fa-solid fa-message"></i> Comments (05)
                </li>
              </ul>
              <a href="#">
                The standart personal My <br /> portfolio
              </a>

              <span>31 December,2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
