import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import Loading from '../Loading';
import PopulationAndEconomics from '../PopulationAndEconomics';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsSection1 = () => {

  const { newsDetails, getNews, news, getNewsByTag, newsByTag, postComment } = useContext(newsContext)
  const history = useHistory()


  //___________________________
  const [comment, setComment] = useState({})

  function handleInput(e) {
    let obj = {
      ...comment,
      post_id: newsDetails.id,
      [e.target.name]: e.target.value,
    }
    setComment(obj)
  }
  function handleClick() {
    if (!comment.full_name || !comment.comment) return notify1("Введите корректные данные")
    postComment(comment)
    setComment({ full_name: "", comment: "" })
    notify()
  }

  function fakeFunction() {
    getNewsByTag(newsDetails.tags[0])
    return 10
  }

  // 
  const notify = () => toast.dark("Ваш комментарий отправлен на модерацию");
  const notify1 = (arg1) => toast.dark(arg1);
  //


  return (
    <>
      {newsDetails ? (
        news ? (

          <>
            <ToastContainer />
            <div className="container" id={fakeFunction()}>
              <div className="row" id="content-wrapper">
                <div className="col-sm-8 col-xs-12">
                  <div itemScope="" itemType="http://schema.org/NewsArticle" itemID="https://24.kg/obschestvo/180523_uchitelya_shkolyi_karakola_prosyat_ministra_obrazovaniya_vernut_uvolennogo_direktora/">
                    <div className="row">
                      <div itemProp="articleSection" className="col-xs-4 newsCat">
                        <Link to={`/news-by-category/${newsDetails.category[0].id}`}>
                          <span style={{ marginLeft: 4 }}>{newsDetails.category[0].title_category}</span>
                        </Link>
                      </div>
                    </div>
                    <h1 itemProp="name" className="newsTitle">{newsDetails.title_post}</h1>
                    <div className="row">
                      <div className="col-xs-12 newsDate hidden-sm hidden-md hidden-lg"><span itemProp="datePublished" content="2021-01-20\">10:14, 20 января 2021</span>, Бишкек - <span itemProp="publisher" itemScope="" itemType="http://schema.org/Organization"><span itemProp="name">24.kg</span>
                        <span itemProp="logo" itemScope="" itemType="http://schema.org/ImageObject">
                        </span>
                      </span>, <span itemProp="author" itemScope="" itemType="http://schema.org/Person"><span itemProp="name"
                        className="text-nowrap">Руслан ХАРИЗОВ</span></span>
                      </div>
                    </div> <span itemProp="image" itemScope="" itemType="http://schema.org/ImageObject">
                    </span>
                    <div className="row hidden-print">
                      <div className="col-xs-12 social social-links">
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
                    </div>
                    <div className="cont" itemProp="articleBody">
                      <div className="poTeme">
                        <div className="title">Читайте по теме</div>
                        {
                          newsByTag ? (
                            <div className="one">
                              <Link to={`/news-detail${newsByTag.results[newsByTag.results.length - 1].id}`}>{newsByTag.results[newsByTag.results.length - 1].title_post}</Link>
                            </div>
                          ) : (null)
                        }
                      </div>
                      <p>{newsDetails.description}</p>
                    </div>
                    <div className="row hidden-print">
                      <div className="col-xs-12 social social-links">
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
                    </div>
                    <div className="row mgb30 hidden-print">
                      <div className="col-xs-12 col-sm-8 newsLink">Ссылка: <span id="article-link">https://localhost:3000{history.location.pathname}</span> <a href="javascript:;" className="clipboard" data-clipboard-target="#article-link" data-title="Ссылка скопирована" style={{ fontSize: 13 }} data-original-title=""
                        title=""><i className="fa fa-clipboard"></i></a> <br /> просмотров: {newsDetails.views} </div>
                      <div className="col-xs-12 col-sm-4 text-right newsPrintLink"> <a href="javascript:window.print();"><i
                        className="fa fa-print" aria-hidden="true"></i> Версия для печати </a> </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div id="19_w0" className="mgb40 hidden-print" data-ox-phs="{50:{min:1200},93:{min:992,max:1199},94:{min:768,max:991},95:{max:767}}" style={{ display: "none" }}></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div id="19_w1" className="mgb40 hidden-print" data-ox-phs="{141:{min:1200},142:{min:992,max:1199},143:{min:768,max:991},144:{max:767}}"
                        style={{ display: "none" }}></div>
                    </div>
                  </div>
                  <div className="row lineNews mgb40 hidden-print">
                    <div className="col-xs-12">
                      <div className="warning">
                        Не допускаются комментарии, содержащие элементы агитации или антиагитации, унижающие честь и достоинство личности, элементы разжигания розни, угрозы и нецензурную брань публиковаться не будут. Просьба следовать правилам форума.
                    </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="lineTitle"> Оставить коментарий
                            <div className="line" style={{ marginBottom: 10 }}></div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="one">
                        <div>
                          <input value={comment.full_name} onChange={handleInput} name="full_name" style={{ backgroundColor: "#edebeb", width: "100%", marginBottom: 20, padding: 10 }} placeholder="Ваше имя" type="text" />
                        </div>
                        <div>
                          <textarea value={comment.comment} onChange={handleInput} name="comment" style={{ backgroundColor: "#edebeb", width: "100%", padding: 10 }} placeholder="Ваш комментарии" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                          <button onClick={() => handleClick(newsDetails)} style={{ width: "100%", padding: "10px 0", backgroundColor: "#064b67", color: "white", marginTop: 5 }}>Отправить комментарии</button>
                        </div>
                        <div className="title">
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  */}
                  <div className="row lineNews mgb40 hidden-print">
                    <div className="col-xs-12">
                      <div className="lineTitle"> Коментарии
                            <div className="line" style={{ marginBottom: 10 }}></div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="one">
                        {newsDetails.comments.length ? (
                          newsDetails.comments.map((item, index) => (
                            <React.Fragment key={index + "comment"}>
                              <div className="title">
                                <h4 style={{ fontWeight: 700 }}>{item.full_name}</h4>
                              </div>
                              <div>
                                <span>{item.comment}</span>
                              </div>
                            </React.Fragment>
                          ))
                        ) : (
                            <>
                              <div className="title">
                                <h4 style={{ fontWeight: 700 }}>Пока комментариев нету</h4>
                              </div>
                            </>
                          )}
                      </div>
                    </div>
                  </div>
                  {/*  */}

                  <div className="row lineNews mgb40 hidden-print">
                    <div className="col-xs-12">
                      <div className="lineTitle"> Материалы по теме
                      <div className="line" style={{ marginBottom: 10 }}></div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      {newsByTag ? (
                        newsByTag.results.map(item => (
                          <div className="one" key={item.id}>
                            <div className="title">
                              <Link data-pjax="0" to={`/news-detail${item.id}`}>
                                <span>{item.title_post}</span>
                              </Link>
                            </div>
                          </div>
                        ))
                      ) : (
                          <Loading />
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div id="19_w2" className="mgb20 hidden-print" data-ox-phs="{96:{min:1200},97:{min:992,max:1199},98:{min:768,max:991},99:{max:767}}" style={{ display: "none" }}></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div id="19_w3" className="mgb20 hidden-print" data-ox-phs="{100:{min:1200},101:{min:992,max:1199},102:{min:768,max:991},103:{max:767}}"
                        style={{ display: "none" }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 hidden-xs hidden-print">
                  <div id="19_w4" className="mgb40 hidden-print" data-ox-phs="{47:{min:1200},84:{min:992,max:1199},85:{min:768,max:991},86:{max:767}}">
                  </div>
                  <div id="19_w5" className="mgb40 hidden-print" data-ox-phs="{48:{min:1200},87:{min:992,max:1199},88:{min:768,max:991},89:{max:767}}" style={{ display: "none" }}></div>
                  <div className="centerra">
                    <div className="row mgb20">
                      <div className="col-md-7"> Стоимость акций Центерры на бирже в Торонто (TSX)<br /> на 20.01.2021 </div>
                      <div className="col-md-5 centerra-value">
                        <div className="usd">USD 11,22 <img src="./Учителя школы Каракола просят министра образования вернуть уволенного директора » Общество » www.24.kg - КЫРГЫЗСТАН_files/down.gif" alt="" title="" /> </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-7">
                        <div className="reserv">Золотой резерв КР</div>
                        <div className="price_text">Стоимость акций КР в "Центерре"</div>
                      </div>
                      <div className="col-md-5 centerra-value">
                        <div className="price">$868 528 650</div>
                      </div>
                    </div>
                  </div>
                  <div id="scrollable-banners-sticky-wrapper" className="sticky-wrapper" style={{ height: 0 }}>
                    <div id="scrollable-banners" style={{ bottom: 0, width: 360 }}>
                      <div id="19_w6" className="mgb40 hidden-print" data-ox-phs="{49:{min:1200},90:{min:992,max:1199},91:{min:768,max:991},92:{max:767}}" style={{ display: "none" }}></div>
                      <div id="19_w7" className="mgb40 hidden-print" data-ox-phs="{137:{min:1200},138:{min:992,max:1199},139:{min:768,max:991},140:{max:767}}"
                        style={{ display: "none" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <PopulationAndEconomics newsArr={news.results} />
            </div>
            <div id="css-loaded"></div>
          </>
        ) : (
            <Loading />
          )
      ) : (
          <Loading />
        )}
    </>
  );
};

export default DetailsSection1;