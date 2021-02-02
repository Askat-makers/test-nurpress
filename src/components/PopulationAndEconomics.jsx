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
              <div key={item.id} className="col-sm-3 col-xs-6 ">
                <Link to={`/news-detail${item.id}`} className="title">
                  <img src={item.post_image[0].image} alt="PHOTO" />
                  <span>{item.title_post}</span></Link>
              </div>
            ))}
            <div className="col-xs-12 visible-xs"></div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xs-12">
            <div className="lineTitle">Бизнес<div className="line"></div>
            </div>
          </div>
        </div> */}
        <Section3 />
        {/* <div className="row blockNews">
          <div className="row">
            <div className="col-sm-3 col-xs-6 ">
              <a href="https://24.kg/biznes_info/180467_kak_vkriminalnom_filme_90-h_vladelets_seti_spekulyant_zayavlyaet_oreyderstve/" className="title"> <img src="./Учителя школы Каракола просят министра образования вернуть уволенного директора » Общество » www.24.kg - КЫРГЫЗСТАН_files/194992_w263_h198.jpg" alt="PHOTO"/><span>Как в&nbsp;криминальном фильме 90-х. Владелец сети «Спекулянт» заявляет о&nbsp;рейдерстве
              </span> </a>
            </div>
            <div className="col-xs-12 visible-xs"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PopulationAndEconomics;