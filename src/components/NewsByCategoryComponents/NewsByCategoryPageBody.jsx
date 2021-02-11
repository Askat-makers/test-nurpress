import React, { useContext, useEffect } from 'react';
import PopulationAndEconomics from '../PopulationAndEconomics';
import { newsContext } from '../../contexts/NewsContext';
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link, useHistory } from 'react-router-dom';
import Pagination from '../Pagination'
import Loading from '../Loading';

const NewsByCategoryPageBody = ({ props }) => {
  const { newsByCategory, news } = useContext(newsContext)
  let categoryId = props.match.params.category
  function defineCategory(obj) {
    let newArr = obj[0].category.filter(item => item.id == categoryId)
    try {
      return newArr[0].title_category
    } catch (e) {
      return "Последние новости"
    }
  }
  // _________________________________________

  const history = useHistory()
  function handleClick(e) {
    let search = new URLSearchParams(props.history.location.search)
    search.set("page", e.target.innerText)
    let url = `${props.location.pathname}&${search.toString()}`
    props.history.push(url)
  }


  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row" id="content-wrapper">
          <div className="col-sm-8 col-xs-12">
            {newsByCategory ? (
              <>
                <h1 className="pageTitle">{defineCategory(newsByCategory.results.slice(-1))}</h1>
                <div className="row mainNewsinCat">
                  <div className="col-xs-12 col-md-5 col-md-push-7">
                    <h3 className="title"><Link to={`/news-detail${newsByCategory.results.slice(-1)[0].id}`} >{newsByCategory.results.slice(-1)[0].title_post}</Link></h3>
                    {/* <div className="date">12:01, 18 января 2021</div> */}
                    <div className="descr hidden-sm hidden-xs">
                      <Link to={`/news-detail${newsByCategory.results.slice(-1)[0].id}`}>
                        {`${newsByCategory.results.slice(-1)[0].description.slice(0, 300)}...`}
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-7 col-md-pull-5 pic"><img
                    src={newsByCategory.results.slice(-1)[0].post_image[0].image}
                    alt="Кто станет оппозицией Садыру Жапарову" /></div>
                  <div className="col-xs-12 col-md-5 visible-sm visible-xs">
                    <div className="descr"> <a
                      href="/">{newsByCategory.results.slice(-1)[0].description}</a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Loading/>
            )}
            <div className="row lineNews">
              <div className="col-xs-12 hidden-print">
                <div className="lineTitle"> Лента новостей <a href="https://24.kg/english/"
                  className="pull-right btn btn-default newsBries" role="button">news brief</a> <a
                    href="https://24.kg/kyrgyzcha/" className="pull-right btn btn-default newsBries" style={{ marginRight: 5 }}
                    role="button">кыргызча</a>
                  <div className="line"></div>
                </div>
              </div>
              <div className="col-xs-12">
                {newsByCategory ? (
                  newsByCategory.results.map(item => (
                    <div key={item.id} className="one">
                      {/* <div className="time">14:30</div> */}
                      <div className="title"> <Link data-pjax="0" to={`/news-detail${item.id}`}>
                        <span>{item.title_post}</span></Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <Loading/>
                )
                }
                {
                  newsByCategory ? (
                    <div className="col-xs-12 hidden-print">
                      <Pagination number={newsByCategory.total_pages} handleClick={handleClick} />
                    </div>
                  ) : (
                    <Loading/>
                  )
                }
              </div>
            </div>
          </div>
          <div className="col-sm-4 hidden-xs hidden-print">
            {/* <div id="d7_w7" className="mgb40 hidden-print"
              data-ox-phs="{&quot;47&quot;:{&quot;min&quot;:1200},&quot;84&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;85&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;86&quot;:{&quot;max&quot;:767}}">
              <iframe src="./Власть » www.24.kg - КЫРГЫЗСТАН_files/afr(1).html" width="100%" height="300" frameborder="0"
                scrolling="no"></iframe>
            </div> */}
            <div id="d7_w8" className="mgb40 hidden-print"
              data-ox-phs="{&quot;48&quot;:{&quot;min&quot;:1200},&quot;87&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;88&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;89&quot;:{&quot;max&quot;:767}}"
              style={{ display: "none" }}></div>
            <div className="centerra">
              <div className="row mgb20">
                <div className="col-md-7"> Стоимость акций Центерры на бирже в Торонто (TSX)<br /> на 20.01.2021 </div>
                <div className="col-md-5 centerra-value">
                  <div className="usd">USD 11,22 <img src="./Власть » www.24.kg - КЫРГЫЗСТАН_files/down.gif" alt="" title="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="reserv">Золотой резерв КР</div>
                  <div className="price_text">Стоимость акций КР в "Центерре"</div>
                </div>
                <div className="col-md-5 centerra-value">
                  <div className="price">$868&nbsp;528&nbsp;650</div>
                </div>
              </div>
            </div>
            <div id="scrollable-banners-sticky-wrapper" className="sticky-wrapper" style={{ height: 0 }}>
              <div id="scrollable-banners" style={{ width: 360 }}>
                <div id="d7_w9" className="mgb40 hidden-print"
                  data-ox-phs="{&quot;49&quot;:{&quot;min&quot;:1200},&quot;90&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;91&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;92&quot;:{&quot;max&quot;:767}}"
                  style={{ display: "none" }}></div>
                <div id="d7_w10" className="mgb40 hidden-print"
                  data-ox-phs="{&quot;137&quot;:{&quot;min&quot;:1200},&quot;138&quot;:{&quot;min&quot;:992,&quot;max&quot;:1199},&quot;139&quot;:{&quot;min&quot;:768,&quot;max&quot;:991},&quot;140&quot;:{&quot;max&quot;:767}}"
                  style={{ display: "none" }}></div>
              </div>
            </div>
          </div>
        </div>
        {
          news ? (
            <PopulationAndEconomics newsArr={news.results.slice(-4)} />
          ) : (
            <Loading/>
          )
        }
      </div>
      <Footer />
    </>
  );
};

export default NewsByCategoryPageBody;