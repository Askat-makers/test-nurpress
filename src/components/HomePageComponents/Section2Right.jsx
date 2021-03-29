import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import Loading from '../Loading';


const Section2Right = () => {

  const { news } = useContext(newsContext)
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6 hidden-print">
        <div className="line visible-xs mgb20 mgt0"></div>
        <div className="blockNews right-list">
          <div className="row">
            {news ? (
              <>
                <div className="col-xs-6 col-num-0">
                  <Link to={`/news-detail${news.results[news.results.length - 1].id}`} className="title">
                    <img src={news.results[news.results.length - 1].post_image.length > 0 ? news.results[news.results.length - 1].post_image[0].image : "popular"} alt="img" />
                    <span>{news.results[news.results.length - 1].title_post}</span>
                  </Link>
                </div>
                <div className="col-xs-6 col-num-0">
                  <Link to={`/news-detail${news.results[news.results.length - 2].id}`} className="title">
                    <img src={news.results[news.results.length - 1].post_image.length > 0 ? news.results[news.results.length - 1].post_image[0].image : "popular"} alt="img" />
                    <span>{news.results[news.results.length - 2].title_post}</span>
                  </Link>
                </div>
              </>
            ) : (null)}
            <div className="row">
              <div className="col-xs-12 col-num-0 col-num-1">
                <a href="callto://+996312625652" className="title">
                  <img src="https://sun9-24.userapi.com/c850532/v850532335/1ac866/al3OEUsv9xQ.jpg" style={{width: "100%", height: "auto"}} alt="img" />
                </a>
              </div>
            </div>
            <div className="row">
              {news ? (
                news.results.slice(-10).map(item => (
                  <div key={item.id} className="col-xs-6 col-num-0">
                    <Link to={`/news-detail${item.id}`} className="title">
                      <img id="section-2-right-img" src={item.post_image.length > 0 ? item.post_image[0].image : "popular"} alt="img" />
                      <span>{item.title_post}</span>
                    </Link>
                  </div>
                ))
              ) : (
                  <Loading />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2Right;