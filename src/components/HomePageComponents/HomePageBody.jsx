import React from 'react';
import Section1 from './Section1';
import Section2Left from './Section2Left';
import Section2Right from './Section2Right';
import Section3 from './Section3';
import Navbar from '../Navbar';
import Footer from '../Footer'

const HomePageBody = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Section1 />
        <div className="row">
          <div className="col-lg-12">
            <div id="3b_w6" className="mgb40 hidden-print"
              data-ox-phs="{39:{min:1200},72:{min:992,max:1199},73:{min:768,max:991},74:{max:767}}">
              {/* <iframe src="afr.php" width="100%" height="51" frameBorder="0" scrolling="no"></iframe> */}
              <div style={{ width: "100%", height: 51, backgroundColor: "gray", textAlign: "center" }}>Здесь может быть ваша реклама</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div id="3b_w7" className="mgb40 hidden-print"
              data-ox-phs="{125:{min:1200},126:{min:992,max:1199},127:{min:768,max:991},128:{max:767}}"
              style={{ display: "none" }}></div>
          </div>
        </div>
        <div className="row mgb40">
          <Section2Left />
          <Section2Right />
          <Section3 />
        </div>
        <div id="css-loaded"></div>
      </div>
      <Footer />
    </>
  );
};

export default HomePageBody;