import './Social.css'
import telegram from "../../UI/icons/social/telegram.svg";
import viber from "../../UI/icons/social/viber.svg";
import whatsapp from "../../UI/icons/social/whatsapp.svg";

export default function Social({gap}) {
  return(
    <ul className={`social ${gap? 'gap' : ''}`}>
      <li className='social__item'><a href="https://t.me/llyoly"><img src={telegram} alt="telegram"/></a></li>
      <li className="social__item"><a href="https://wa.me/79998023479"><img alt="viber" src={viber}/></a></li>
      <li className="social__item"><a href="https://wa.me/79998023479"><img alt="whatsapp" src={whatsapp}/></a></li>
    </ul>
  )
}
