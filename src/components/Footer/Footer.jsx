import './Footer.css'
import Social from "../Social/Social";
import {Link} from "react-router-dom";
import FooterNavigator from "../FooterNavigator/FooterNavigator";

export default function Footer() {

  return (
    <div className="footer">
      <ul className="navigator">
        <li className="navigator__links no-dots">
          <div className="about nav">
            <h4 className="about__title links-title">О компании</h4>
            <ul className="links no-dots">
              <li className="links__item">
                <Link to="pageInDevelopment" className="links__item">Партнёрская программа</Link>
              </li>
              <li className="links__item">
                <Link to="pageInDevelopment" className="links__item">Вакансии</Link>
              </li>
            </ul>
          </div>
          <div className="menu nav">
            <h4 className="menu__title links-title">Меню</h4>
            <FooterNavigator ulClass="menu__links no-dots"/>
          </div>
        </li>
        <li className="navigator__contacts no-dots">
          <div className="contacts nav">
            <h4 className="contacts__title links-title">Контакты</h4>
            <ul className="links links_type_contact no-dots">
              <li className="links__item"><a href="tel:+75555555555" className="links__tel">+7-555-555-55-55</a></li>
              <li className="links__item">{<Social gap={true}/>}</li>
              <li className="links__item"><p className="links__adress">Москва, Путевой проезд 3с1, к 902</p></li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="footer__copyright">
        <p className="footer__copyright">©WELBEX 2022. Все права защищены.</p>
        <a href="#" className="footer__confiditional">Политика конфиденциальности</a>
      </div>

    </div>
  )
}
