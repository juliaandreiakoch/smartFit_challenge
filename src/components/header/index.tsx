import { SmartfitLogo } from "../../assets/images/smartFit-logo"
import './index.css';
import { headerTitle, headerSubTitle } from "./contants";


export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <SmartfitLogo/>
      </div>
      <div className="first-infos">
        <p className="title">{headerTitle}</p>
        <div className="black-bar"/>
        <p className="subtitle">{headerSubTitle}</p>
      </div>
    </div>
  )
}