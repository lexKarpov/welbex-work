import './Main.css'
import Privilege from "../Privilege/Privilege";
import {Link} from "react-router-dom";

export default function Main () {
  return(
    <div className="main">
      <div className="slogan">
        <h1 className="slogan__title">Зарабатывайте больше</h1>
        <span className="slogan__gradient">с WELBEX</span>
        <p className="slogan__desc">Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="actions">
        <h2 className="actions__title">Вместе с <span className="actions__gradient">бесплатной консультацией</span> мы дарим:</h2>
        <Privilege/>
        <Link to="/pageInDevelopment" className="back-call">Получить консультацию</Link>
      </div>
    </div>
  )
}
