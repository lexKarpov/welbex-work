import './FooterNavigator.css'
import useWindowDimensions from "../../utils/changeWindowDimentions";
import LinkTo from "../LinkTo/LinkTo";
import {desctopList, mobileList} from '../../variables/footerData'
export default function FooterNavigator({ulClass}) {
  const deviceWidth = useWindowDimensions ()
  const itemList = deviceWidth > 1080 ? desctopList : mobileList
  return (
    <ul className={ulClass}>
      {
        deviceWidth > 1080 ?
          desctopList.map((el, index) => <LinkTo to={el.to} name={el.name} key={index}/>)
          :
          mobileList.map((el, index) => <LinkTo to={el.to} name={el.name} key={index}/>)
      }
    </ul>
  )
}
