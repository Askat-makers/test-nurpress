import React from 'react';
import { Link } from 'react-router-dom';
import Section3 from './HomePageComponents/Section3';

const PopulationAndEconomics = ({ newsArr }) => {

  newsArr.sort((a, b) => a.views > b.views ? 1 : -1)
  
  return (
    <>
      <div className="hidden-print">
        <div className="row">
          <div className="col-xs-12">
            <div className="lineTitle"> Популярные новости
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row blockNews">
          <div className="row">
            {newsArr.slice(-4).map(item => (
              <div key={item.id + "population-news"} className="col-sm-3 col-xs-6 ">
                <Link to={`/news-detail${item.id}`} className="title">
                  <img src={item.post_image[0].image} alt="PHOTO" />
                  <span>{item.title_post}</span></Link>
              </div>
            ))}
            <div className="col-xs-12 visible-xs"></div>
          </div>
        </div>
        <Section3 />
      </div>
    </>
  );
};

export default PopulationAndEconomics;