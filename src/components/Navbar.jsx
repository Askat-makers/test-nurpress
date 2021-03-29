import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../contexts/NewsContext';
import nurpressLogo from '../img/nurpress-logo.png'

const Navbar = ({ props }) => {

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const { getCurrency, currencies, getCategories, categories } = useContext(newsContext)
  const [date, setDate] = useState({})
  useEffect(() => {
    let dateNow = new Date()
    let obj = {
      year: dateNow.getFullYear(),
      month: dateNow.getMonth(),
      day: dateNow.getDate()
    }
    handleDate(obj)
  }, [])
  function handleDate(obj) {
    switch (obj.month) {
      case 0: return setDate({ ...obj, month: '01' })
      case 1: return setDate({ ...obj, month: '02' })
      case 2: return setDate({ ...obj, month: '03' })
      case 3: return setDate({ ...obj, month: '04' })
      case 4: return setDate({ ...obj, month: '05' })
      case 5: return setDate({ ...obj, month: '06' })
      case 6: return setDate({ ...obj, month: '07' })
      case 7: return setDate({ ...obj, month: '08' })
      case 8: return setDate({ ...obj, month: '09' })
      case 9: return setDate({ ...obj, month: '10' })
      case 10: return setDate({ ...obj, month: '11' })
      case 11: return setDate({ ...obj, month: '12' })
    }
  }
  useEffect(() => {
    getCategories()
    getCurrency()
  }, [])
  // _____________________________________________________________________________
  const history = useHistory()
  const [searchWord, setSearchWord] = useState("")
  function handleInput(e) {
    setSearchWord(e.target.value)
  }
  function handleClick(e) {
    e.preventDefault()
    if (!searchWord) return
    history.push(`/search/${searchWord}`)
  }

  return (
    <>
      <header className="row hidden-print">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-5 logo">
          <Link to="/">
            <img className="visible-lg visible-xs" src={nurpressLogo} alt="nurpress.kg" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 lang hidden-xs">
          <div>
            <span onClick={() => changeLanguage("kg")}>Кыр</span>
            <Link to="/" onClick={() => changeLanguage("ru")}>RU</Link>
            <Link to="/" rel="nofollow">Архив</Link>
          </div>
          <div>
            <a href="callto://+996312625652">Наши услуги</a>
          </div>
        </div>
        <div className="col-lg-5 col-md-4 col-sm-4 hidden-xs socCont">
          <div className="social">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100052561304911" rel="nofollow">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://twitter.com/MOYoMYd01Buh1Ex" rel="nofollow">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCbmZoqKCRKuXv8ejoL7kYCg" rel="nofollow">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/nur.press/?hl=ru">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://wa.me/996555312024">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
          <div className="search">
            <form onSubmit={handleClick} >
              <div className="input-group"> <span className="input-group-btn"> <button className="btn btn-default" type="submit"> <i
                className="fa fa-search" aria-hidden="true"></i> </button> </span>
                <input value={searchWord} onChange={handleInput} type="text" className="form-control" placeholder="Поиск" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-7">
          <div className="lang hidden-lg hidden-md hidden-sm">
            <div>
              <Link to="/">Кыр</Link>
              <Link to="/">Eng</Link>
              <Link to="/" rel="nofollow">Архив</Link>
            </div>
            <div>
              <a href="callto://+996312625652">Наши услуги</a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-7 col-sm-7 col-md-8 pdr-0">
              <div className="weather">
                <span>Сегодняшняя дата:</span>
                <br />
                <span className="hidden-xs"> {date.year}.{date.month}.{date.day}
                  <span style={{ textTransform: "capitalize" }}></span>
                </span>
              </div>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-4 pdl-0 text-right">
              <div className="currency " id="currencies" data-original-title >
                {currencies.map((item, index) => (
                  <div key={index + "currencies"}>
                    <b>{item.attributes.ISOCode} </b>
                    <span> {item.elements[1].elements[0].text} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar hidden-print" id="menu">
        <div className="navbar-header"> <button type="button" className="navbar-toggle menuMenuButton"> <i
          className="fa fa-align-justify" aria-hidden="true"></i> Рубрикатор </button>
          <button className="navbar-toggle pull-right searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
          <div id="searchForm">
            <div className="title"><i className="fa fa-search" aria-hidden="true"></i> Поиск по сайту <span
              className="close closeSearchForm"><i className="fa fa-times" aria-hidden="true"></i></span> </div>
            <form id="w13" onSubmit={handleClick}>
              <input value={searchWord} onChange={handleInput} type="text" className="form-control" name="SearchForm[text]" placeholder="Поиск" />
              <button type="submit" className="btn btn-default">Найти</button>
            </form>
          </div>
        </div>
        <div id="mainMenu">
          <div className="title hidden-sm hidden-md hidden-lg"><i className="fa fa-bars" aria-hidden="true"></i> Рубрикатор <span
            className="close closeMainMenu"><i className="fa fa-times" aria-hidden="true"></i></span> </div>
          <ul className="nav navbar-nav">
            {categories ? (
              categories.results.map(item => (
                <li key={item.id}><Link to={`/news-by-category/${item.id}`}><span>{item.title}</span></Link></li>
              ))
            ) : (null)}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;