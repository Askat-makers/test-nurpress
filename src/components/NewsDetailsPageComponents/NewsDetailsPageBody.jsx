import React from 'react';
import Footer from '../Footer'
import Navbar from '../Navbar'
import DetailsSection1 from './DetailsSection1';
const NewsDetailsPageBody = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <DetailsSection1 />
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailsPageBody;