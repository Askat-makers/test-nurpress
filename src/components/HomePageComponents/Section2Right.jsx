import React, { useContext } from 'react';
import { newsContext } from '../../contexts/NewsContext';


const Section2Right = () => {

  const { news } = useContext(newsContext)
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6 hidden-print">
        <div className="line visible-xs mgb20 mgt0"></div>
        <div className="blockNews right-list">
          <div className="row">
            {news ? (
              <div className="col-xs-6 col-num-0"> <a href="/obschestvo/180255_vozvraschenie_vshkolu_nadolgoli/"
                className="title"> <img src={news.results[news.results.length - 1].post_image[0].image} alt="img"/> <span>{news.results[news.results.length - 1].title_post}</span> </a>
              </div>
            ) : (null)}
            <div className="col-xs-6 col-num-1">
              <div className="centerra-index">
                <div className="row mgb20">
                  <div className="col-md-7"> Стоимость акций Центерры <div className="price_text">на бирже в Торонто (TSX) на
                      15.01.2021</div>
                  </div>
                  <div className="col-md-5 centerra-value">
                    <div className="usd">USD 11,45 <img src="img/up.gif" alt="img"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="reserv">Золотой резерв КР</div>
                      <div className="price_text">Стоимость акций КР в "Центерре"</div>
                    </div>
                    <div className="col-md-5 centerra-value">
                      <div className="price">$886&nbsp;321&nbsp;787</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="section-2-right-20px">
              <div id="a1_w8" className="col-xs-12 hidden-print col-num-0 col-num-1"
                data-ox-phs="{122:{min:1200},121:{min:992,max:1199},123:{min:768,max:991},124:{max:767}}"
                style={{ display: "none" }}></div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-num-0 col-num-1"> <a href="/press_konferentsii/180272_press-konferentsiya/"
                className="title"> <img src="https://24.kg/thumbnails/114c6/3e4d3/194970_w555_h315.png" alt="img" /> <span>Пресс-конференция
                </span></a> </div>
            </div>
            <div className="row">
              {news ? (
                news.results.map(item => (
                  <div key={item.id} className="col-xs-6 col-num-0"> <a
                    href="/vlast/179900_zachem_nam_premer_ekspertyi_ovozmojnyih_kandidatah_nadoljnost_glavyi_kabmina/"
                    className="title"> <img src={item.post_image[0].image} alt="img" /> <span>{item.title_post}</span> </a>
                  </div>
                ))
              ) : (null)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2Right;