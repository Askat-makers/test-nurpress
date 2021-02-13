import React, { useContext, useEffect } from 'react';
import PopulationAndEconomics from '../PopulationAndEconomics';
import { newsContext } from '../../contexts/NewsContext';
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link, useHistory } from 'react-router-dom';
import Pagination from '../Pagination'
import Loading from '../Loading';

const NewsByCategoryPageBody = ({ props }) => {
  const { newsByCategory, news, getNews } = useContext(newsContext)
  let categoryId = props.match.params.category
  function defineCategory(obj) {
    let newArr = obj[0].category.filter(item => item.id == categoryId)
    try {
      return newArr[0].title_category
    } catch (e) {
      return "Последние новости"
    }
  }
  // useEffect(() => {
  //   getNews()
  // }, [])
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
                <Loading />
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
                    <Loading />
                  )
                }
                {
                  newsByCategory ? (
                    <div className="col-xs-12 hidden-print">
                      <Pagination number={newsByCategory.total_pages} handleClick={handleClick} />
                    </div>
                  ) : (
                      <Loading />
                    )
                }
              </div>
            </div>
          </div>
          <div className="col-sm-4 hidden-xs hidden-print">
            <div className="row">
              <div className="col-xs-12 col-num-0 col-num-1">
                <a href="callto://+996312625652" className="title">
                  <img src="https://sun9-24.userapi.com/c850532/v850532335/1ac866/al3OEUsv9xQ.jpg" style={{ width: "100%", height: "auto" }} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {
          news ? (
            <PopulationAndEconomics newsArr={news.results.slice(-4)} />
          ) : (
              <Loading />
            )
        }
      </div>
      <Footer />
    </>
  );
};

export default NewsByCategoryPageBody;