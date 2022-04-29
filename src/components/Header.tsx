import HEADER from "../configs/menu.json"
import DiscordIcon from "../assets/svg/discord";
import OpenSeaIcon from "../assets/svg/opensea";
import InstagramIcon from "../assets/svg/instagram";
import TwitterIcon from "../assets/svg/twitter";
import TiktokIcon from "../assets/svg/tiktok";
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

type Props = {
  mT: any;
  menu: any;
};

const Header = ({ mT, menu }: Props) => {
  const MENU_ITEMS = HEADER["menu-item"];

  const location = useLocation();
  const navigate = useNavigate()

  const handleGoSection = (index: string) => {
    if (location.pathname === '/') {
      const element: any = document.getElementById(index)
      const topPos = element.offsetTop
      let headerHeight: any = document.getElementById('header')?.offsetHeight
      if (headerHeight === 0) headerHeight = 70
      window.scrollTo({
        top: topPos,
        left: 100,
        behavior: 'smooth'
      })
    } else {
      navigate('/#' + index)
    }
  }

  return (
    <div className={"flex justify-between px-6 lg:px-16 " + mT + " bg-[#0B0B0B]/0 backdrop-blur-[0px]"} id="header">
      <div className="ml-0 lg:ml-[80px] text-[20px] font-['Trouble_Font'] font-[400] tracking-[2px] leading-[24px]"><Link to="/">PulseChainArt</Link></div>
      <div className={"hidden lg:" + menu + " justify-items-center space-x-[30px] items-center"}>
        {
          MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map((item) =>
            <div key={item} onClick={() => handleGoSection(item.toLowerCase())} className="cursor-pointer hover:text-[#0094FF]"><div key={item} className="text-[16px] font-['Chakra Petch'] leading-[22px]">{item}</div></div>
          )
        }
      </div>
      <div className="flex justify-items-center space-x-[18px] lg:space-x-[15px] mr-[0px] lg:mr-[80px] items-center">
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="discord" href={HEADER["discord-link"]}><DiscordIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="opensea" href={HEADER["opensea-link"]}><OpenSeaIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="instagram" href={HEADER["instagram-link"]}><InstagramIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="twitter" href={HEADER["twitter-link"]}><TwitterIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="tiktok" href={HEADER["tiktok-link"]}><TiktokIcon /></a>
      </div>
    </div>
  )
}

export default Header;