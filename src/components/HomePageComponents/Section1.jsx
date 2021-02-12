import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { newsContext } from '../../contexts/NewsContext';
import PositionCarouselDemo from './PositionCarouselDemo';
const Section1 = () => {
  const { news, ad } = useContext(newsContext)
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div id="3b_w14" className="mgb20 mgtop30 hidden-print section-ad-block"
            data-ox-phs="{37:{min:1200},54:{min:992,max:1199},55:{min:768,max:991},56:{max:767}}">
            {ad.length ? (
              <div id="section-ad-block" style={{ width: "100%", height: 51, textAlign: "center", marginBottom: 15 }}>
                <img src={ad[0].image_ad} alt="" />
              </div>
            ) : (null)}
          </div>
          <div id="3b_w15" className="mgb20 hidden-print"
            data-ox-phs="{112:{min:1200},113:{min:992,max:1199},114:{min:768,max:991},115:{max:767}}"
            style={{ display: "none" }}></div>
        </div>
      </div>
      <div className="row mgb40 hidden-print">
        <div className="col-sm-9 col-xs-12">
          {
            news ? (
              <PositionCarouselDemo news={news} />
            ) : (null)
          }
        </div>
        <div className="col-sm-3 hidden-xs">
          <div id="3b_w5" className="banFixHeight"
            data-ox-phs="{38:{min:1200},57:{min:992,max:1199},58:{min:768,max:991},59:{max:767}}">
            <div style={{ width: "100%", height: 285 }}>
              <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkV5fXqZ6chiAebLtlQ_JuxaaKTM5SRkZCeTgDn6uOyic" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;