import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { newsContext } from '../../contexts/NewsContext';
import PositionCarouselDemo from './PositionCarouselDemo';
const Section1 = () => {
  const { news } = useContext(newsContext)

  // const [height, setHeight] = useState(0)

  // const measuredRef = useCallback(node => {
  //   if (node !== null) {
  //     console.log(node)
  //     // setHeight(node)
  //   }
  // }, [])

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div id="3b_w14" className="mgb20 hidden-print"
            data-ox-phs="{37:{min:1200},54:{min:992,max:1199},55:{min:768,max:991},56:{max:767}}">
            <div style={{ width: "100%", height: 51, backgroundColor: "gray", textAlign: "center" }}>Здесь может быть ваша реклама</div>
            {/* <iframe src="afr_2.php" width="100%" height="51" frameBorder="0" scrolling="no"></iframe> */}
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
              <PositionCarouselDemo news={news}/>
            ) : (null)
          }
        </div>
        <div className="col-sm-3 hidden-xs">
          <div id="3b_w5" className="banFixHeight"
            data-ox-phs="{38:{min:1200},57:{min:992,max:1199},58:{min:768,max:991},59:{max:767}}">
            <div style={{ width: "100%", height: 285 }}> <img src="https://ox.24.kg/www/images/45c854e87683ff1de86228631e2599fc.png" alt="img" /> </div>
            {/* <iframe src="afr_3.php" width="100%" height="285" frameBorder="0" scrolling="no"></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;