import './PageInDevelopment.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

export default function PageInDevelopment(){
  return(
    <div className="body">
      <div className="container">
        <div className="container__red-light"></div>
        <div className="container__header-bubble"></div>
        <div className="container__purple-bubble"></div>
        <div className="container__small-bubble"></div>
        <div className="container__medium-bubble"></div>
        <div className="content">
          <Header/>
          <div className="development">
            <h2 className="development__title">Страница в разработке</h2>
            <Link to="/" className="development__button back-call">Назад</Link>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
