import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import Pagination from '../Pagination';
const Section2Left = () => {
  const { news } = useContext(newsContext)
  function getHours(date) {
    let a = new Date(date)
    let hours = a.getHours()
    return hours
  }
  function getMinutes(date) {
    let a = new Date(date)
    let min = a.getMinutes()
    if (min < 10) return `0${min}`
    return min
  }
  function getMonth(date) {
    let a = new Date(date)
    let month = a.getMonth()
    if (month === 0) return `01`
    if (month < 10) return `0${month}`
    return month
  }
  function getDate(date) {
    let a = new Date(date)
    let day = a.getDate()
    return day
  }
  // _________________________________________

  const history = useHistory()

  function handleClick(e) {
    history.push(`?page=${e.target.innerText}`)
  }
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div id="newslist" data-pjax-container data-pjax-push-state data-pjax-timeout="5000">
          <div className="row lineNews">
            <div className="col-xs-12 hidden-print">
              <div className="lineTitle"> Новости <a href="/english/" className="pull-right btn btn-default newsBries"
                role="button">news brief</a> <a href="/kyrgyzcha/" className="pull-right btn btn-default newsBries"
                  style={{ marginRight: 5 }} role="button">кыргызча</a>
                <div className="line"></div>
              </div>
            </div>
            <div className="col-xs-12">
              {news ? (
                <>
                  {news.results.map((item) => (
                    <div key={item.id} className="one" >
                      <div style={{color: "#818a93", fontWeight: 700, fontSize: 14}}>{getMonth(item.created)}.{getDate(item.created)} {getHours(item.created)}:{getMinutes(item.created)}</div>
                      <div className="title"> <Link to={`/news-detail${item.id}`} data-pjax="0">
                        <span>{item.title_post}</span></Link>
                      </div>
                    </div>
                  ))}
                  < div className="col-xs-12 hidden-print">
                    <Pagination number={news.total_pages} handleClick={handleClick}/>
                  </div>
                </>
              ) : (null)
              }
            </div>
            <div className="row hidden-print">
              <div className="col-xs-12">
                {/* <!--AdFox START-->
                <!--tds.media2016-->
                <!--Площадка: [Site] | 24.kg / [Site] | 24.kg / [24.kg] [Mobile] Главная | 100%x250 | Под пагинацией-->
                <!--Категория: <не задана>-->
                <!--Тип баннера: [24.kg] [Mobile] Главная | 100%x250 | Под пагинацией--> */}
                <div id="adfox_155366296433068448"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2Left;