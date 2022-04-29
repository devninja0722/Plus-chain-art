import dog1 from "../assets/img/hero/1 dog 1.png";
import dog2 from "../assets/img/hero/2 dog 1.png";
import dog3 from "../assets/img/hero/3 dog 1.png";
import dog4 from "../assets/img/hero/4 dog 1.png";
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
    <div className="justify-center bg-cover bg-[url('./assets/img/hero/md-bg.png')] lg:bg-none pb-[50px] lg:pb-[0px]" id="about">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[200px] mt-[-60px] pt-[20px] lg:mt-[-30px] tracking-[3px] leading-[240px]">Working Dogs</div>
      <div className="ml-[100px] lg:ml-0 flex items-end justify-center mt-[-105px] z-[20] lg:mt-[0px] space-x-[-100px] lg:space-x-[-60px] transition-all duration-350 ease-in" style={{ transform: `translateY(${(offset * 0.3 > 80 ? 80 : offset * 0.3)}px)` }}>
        <img src={dog4} alt="dog4" style={{ transform: `rotate(${offset * -0.01}deg) translateX(${offset * -0.2}px)`, filter: `blur(${offset * 0.008}px)` }} className="lg:flex hidden transition-all duration-350 ease-in" />
        <img src={dog1} alt="dog1" className="hidden lg:flex w-[250px] h-[286px] lg:w-[419px] lg:h-[482px] transition-all duration-350 ease-in" />
        <img src={dog1} alt="dog1" className="flex lg:hidden w-[250px] h-[286px] lg:w-[419px] lg:h-[482px] transition-all duration-350 ease-in" style={{ transform: "rotateY(180deg)" }} />
        <img src={dog2} alt="dog2" className="flex w-[250px] h-[286px] lg:w-[419px] lg:h-[482px] transition-all duration-350 ease-in" />
        <img src={dog3} alt="dog3" style={{ transform: `rotate(${offset * 0.01}deg) translateX(${offset * 0.2}px)`, filter: `blur(${offset * 0.008}px)` }} className="lg:flex hidden transition-all duration-350 ease-in" />
      </div>
      <div className="grid lg:flex lg:justify-center mt-[-60px] z-[10] lg:mt-[-15px] gap-y-[0px] space-x-[0px] lg:space-x-[30px]">
        <ControlButton key="Mint Control" clickHandler={onMint} buttonCaption="Mint" />
        <ControlButton key="Discord Control" clickHandler={onJoinDiscord} buttonCaption="Join Discord" />
      </div>
    </div>
  )
}

export default Hero;