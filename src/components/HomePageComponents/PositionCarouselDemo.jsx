import React from 'react';
import 'antd/dist/antd.css';

import { Carousel, Radio } from 'antd';
import { Link } from 'react-router-dom';

const contentStyle = {
  height: '403px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: "100%"
};

const PositionCarouselDemo = ({ news }) => {
  const [dotPosition, setDotPosition] = React.useState('left');


  return (
    <>
      <Carousel dotPosition={dotPosition} autoplay>
        {news.results.slice(-5).map(item => (
          <div>
            <img id="image-main-page-carousel" style={contentStyle} src={item.post_image[0].image} alt="askat" />
            <div>
              <Link to={`/news-detail${item.id}`}>
                <h3 id="carousel-title-home-page">{item.title_post}</h3>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default PositionCarouselDemo;