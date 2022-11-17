import './Header.css'
import logo from '../../UI/icons/logo.svg'
import Social from "../Social/Social";
import {Link} from "react-router-dom";

export default function Header(){
  return(
    <div className="header">
      <div className="header__navigation">
        <div className="logo">
          <Link to="/" className="logo__link"><img src={logo} alt="logo" className="logo__image"/></Link>

          <p className="logo__caption">крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
        <ul className="navigation">
          <li className="navigation__item"><Link to="/pageInDevelopment" className="navigation__link link">Услуги</Link></li>
          <li className="navigation__item"><Link to="/pageInDevelopment" className="navigation__link link">Виджеты</Link></li>
          <li className="navigation__item"><Link to="/pageInDevelopment" className="navigation__link link">Интеграции</Link></li>
          <li className="navigation__item"><Link to="/pageInDevelopment" className="navigation__link link">Кейсы</Link></li>
          <li className="navigation__item navigation__item_type_hidden"><Link hclassName="link" to="/pageInDevelopment" className="navigation__link link">Сертификаты</Link></li>
        </ul>
      </div>
      <div className="contacts">
        <p className="contacts__item">+7-555-555-55-55</p>
        <Social/>

      </div>
    </div>
  )
}
