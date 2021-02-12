import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsContext } from '../contexts/NewsContext';

const Footer = () => {
  const { getCategories, categories } = useContext(newsContext)
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <ul className="nav hidden-print">
          {categories ? (
            categories.results.map((item, index) => (
              <li key={item.id}><Link to={`/news-by-category/${index + 3}`}><span>{item.title_category}</span></Link></li>
            ))
          ) : (
              null
            )
          }
        </ul>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
            <div className="contact">
              <div><i className="fa fa-phone" aria-hidden="true"></i><span>Телефон <a href="callto://+996312625652">
                +996 (312) 62-56-52</a></span></div>
              <div><i className="fa fa-phone" aria-hidden="true"></i><span>Рекламный отдел <a
                href="callto://+996312625652">+996 (312) 62-56-52</a></span> </div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span>Почта <a
                href="mailto:nurpress@gmail.com">nurpress@gmail.com</a></span> </div>
            </div>
          </div>
        </div>
        <div className="row copy">
          <div className="col-xs-12"> © ИА «nurpess.kg» - Новости Кыргызстана. Все права защищены. Вся информация, размещенная на
          данном веб-сайте, предназначена только для персонального использования и не подлежит распространению без
          письменного разрешения ИА «nurpress.kg». Редакция не несет ответственности за содержимое перепечатанных материалов и
          высказывания отдельных лиц. <br /><br /> Кыргызстан, г. Бишкек, ул.Чуй, 207 +996 312 62-56-52
        </div>
        </div>
      </div>
      <div className="visible-xs"></div>
    </footer>
  );
};

export default Footer;