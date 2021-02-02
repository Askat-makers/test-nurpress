import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  dots: true,
  speed: 500
};

const EconomicsSlider = ({ economicsNews }) => {
  return (
    <>
      <div style={{marginBottom: 20}}>
        <Slider {...settings}>
          {economicsNews.map(item => (
            <div>
              <Link to={`/news-detail${item.id}`}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={item.post_image[0].image} alt="novosti" />
                </div>
                <div>
                  <h4 style={{ textAlign: "center" }}>{item.title_post}</h4>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default EconomicsSlider;