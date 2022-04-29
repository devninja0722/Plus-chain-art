import richard1 from "../assets/img/hero/richard-01.png";
import richard2 from "../assets/img/hero/richard-02.png";
import richard3 from "../assets/img/hero/richard-03.png";
import richard4 from "../assets/img/hero/richard-04.png";
import ControlButton from "./utils/ControlButton";
import { useNavigate } from 'react-router-dom'

type Props = {
  offset: any;
};

const Hero = ({ offset }: Props) => {
  const navigate = useNavigate();

  const onMint = () => {
    navigate('/mint');
  };
  const onJoinDiscord = () => {
    console.log("Join Discord Clicked!");
  };

  return (
    <div className="justify-center bg-cover bg-[url('./assets/img/hero/md-bg.png')] lg:bg-none pb-[50px] lg:pb-[0px]" id="home">
      <div className="flex justify-center font-['Trouble_Font'] text-[64px] lg:text-[200px] mt-[-60px] pt-[20px] lg:mt-[-30px] tracking-[3px] leading-[240px]">Pulse Chain Art</div>
      <div className="ml-[100px] lg:ml-0 flex items-end justify-center mt-[-75px] z-[20] lg:mt-[0px] space-x-[-100px] lg:space-x-[-60px] transition-all duration-350 ease-in" style={{ transform: `translateY(${(offset * 0.3 > 80 ? 80 : offset * 0.3)}px)` }}>
        <img src={richard4} alt="richard4" style={{ transform: `rotate(${offset * -0.01}deg) translateX(${offset * -0.2}px)`, filter: `blur(${offset * 0.008}px)` }} className="hidden transition-all ease-in lg:flex duration-350" />
        <img src={richard1} alt="richard1" className="hidden lg:flex w-[240px] h-[240px] lg:w-[480px] lg:h-[480px] transition-all duration-350 ease-in" />
        <img src={richard1} alt="richard1" className="flex lg:hidden w-[240px] h-[240px] lg:w-[480px] lg:h-[480px] transition-all duration-350 ease-in" style={{ transform: "rotateY(180deg)" }} />
        <img src={richard2} alt="richard2" className="flex w-[240px] h-[240px] lg:w-[480px] lg:h-[480px] transition-all duration-350 ease-in" />
        <img src={richard3} alt="richard3" style={{ transform: `rotate(${offset * 0.01}deg) translateX(${offset * 0.2}px)`, filter: `blur(${offset * 0.008}px)` }} className="hidden transition-all ease-in lg:flex duration-350" />
      </div>
      <div className="grid lg:flex lg:justify-center mt-[-15px] z-[10] lg:mt-[-15px] gap-y-[0px] space-x-[0px] lg:space-x-[30px]">
        <ControlButton key="Mint Control" clickHandler={onMint} buttonCaption="Mint" />
        <ControlButton key="Discord Control" clickHandler={onJoinDiscord} buttonCaption="Join Discord" />
      </div>
    </div>
  )
}

export default Hero;