import {Link} from "react-router-dom";

export default function LinkTo({to, name}){
  return(
    <li className="links__item links__item_type_rout"><Link to={to} className="link link-mobile">{name}</Link></li>
  )
}
