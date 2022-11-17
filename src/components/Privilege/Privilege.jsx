import './Privilege.css'
import useWindowDimensions from "../../utils/changeWindowDimentions";

export default function Privilege() {
  const deviceWidth = useWindowDimensions()
  if(deviceWidth < 768){
    return(
      <ul className="privilege privilege_type_small">
        <li className="privilege__item">
          <h3 className="privilege__title privilege__title_type_small privilege__title_type_before">Skype аудит</h3>

        </li>
        <li className="privilege__item">
          <h3 className="privilege__title privilege__title_type_small privilege__title_type_before">30 виджетов</h3>

        </li>
        <li className="privilege__item">
          <h3 className="privilege__title privilege__title_type_small privilege__title_type_before">Dashboard</h3>

        </li>
        <li className="privilege__item">
          <h3 className="privilege__title privilege__title_type_small privilege__title_type_before">Месяц аmoCRM</h3>

        </li>
      </ul>
    )
  }else{
    return(
      <ul className="privilege">
        <li className="privilege__item">
          <h3 className="privilege__title">Виджеты</h3>
          <p className="privilege__desc">30 готовых решений</p>
        </li>
        <li className="privilege__item">
          <h3 className="privilege__title">Dashboard</h3>
          <p className="privilege__desc">с показателями вашего бизнеса</p>
        </li>
        <li className="privilege__item">
          <h3 className="privilege__title">Skype Аудит</h3>
          <p className="privilege__desc">отдела продаж и CRM системы</p>
        </li>
        <li className="privilege__item">
          <h3 className="privilege__title">35 дней</h3>
          <p className="privilege__desc">использования CRM</p>
        </li>
      </ul>
    )
  }

}
