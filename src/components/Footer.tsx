import FOOTER from "../configs/menu.json"
import DiscordIcon from "../assets/svg/discord";
import OpenSeaIcon from "../assets/svg/opensea";
import InstagramIcon from "../assets/svg/instagram";
import TwitterIcon from "../assets/svg/twitter";
import TiktokIcon from "../assets/svg/tiktok";
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Footer = () => {
  const styleAnchor = "fill-[#FAFAFA] hover:fill-[#0094FF] transition-all duration-150 ease-out"

  const MENU_ITEMS = FOOTER["menu-item"];

  const location = useLocation();
  const navigate = useNavigate()

  const handleGoSection = (index: string) => {

    if (location.pathname === '/') {
      const element: any = document.getElementById(index)
      const topPos = element.offsetTop
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
    <div className="flex justify-between px-6 lg:px-16 py-1 mt-10 bg-[#0B0B0B]/30 backdrop-blur-[4px] h-[92px] border-t-[1px] border-t-[#353535]">
      <div className="flex gap-[120px]">
        <div className="ml-0 lg:ml-[80px] text-[20px] flex items-center align-middle font-['Trouble_Font'] font-[400] tracking-[2px] leading-[24px]"><Link to="/">PulsChainArt</Link></div>
        <div className="hidden lg:flex justify-items-center space-x-[30px] items-center">
          {
            MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map((item) =>
              <div key={item} onClick={() => handleGoSection(item.toLowerCase())} className="cursor-pointer hover:text-[#0094FF]"><div key={item} className="text-[16px] font-['Chakra Petch'] leading-[22px]">{item}</div></div>
            )
          }
        </div>
      </div>
      <div className="flex justify-items-center space-x-[18px] lg:space-x-[15px] mr-[0px] lg:mr-[80px] items-center">
        <a className={styleAnchor} key="discord" href={FOOTER["discord-link"]}><DiscordIcon /></a>
        <a className={styleAnchor} key="opensea" href={FOOTER["opensea-link"]}><OpenSeaIcon /></a>
        <a className={styleAnchor} key="instagram" href={FOOTER["instagram-link"]}><InstagramIcon /></a>
        <a className={styleAnchor} key="twitter" href={FOOTER["twitter-link"]}><TwitterIcon /></a>
        <a className={styleAnchor} key="tiktok" href={FOOTER["tiktok-link"]}><TiktokIcon /></a>
      </div>
    </div>
  )
}

export default Footer;