import PhaseFrame from "../../assets/svg/phaseframe";
import PhaseLoaded from "../../assets/svg/phaseloaded";
import PhaseProgress from "../../assets/svg/phaseprogress";
import PhaseLight from "../../assets/svg/phaselight.svg";

type Props = {
  name: any;
  image: any;
  description: any;
  loaded: any;
  progress: any;
};

const PhaseItem = ({ name, image, description, loaded, progress }: Props) => {
  const newImg = require('../../assets/img/roadmap/' + image);
  return (
    <div className="md:ml-[55px]">
      <img className="mt-[540px] md:mt-[533px] ml-[-20px]" alt="Phase Light" src={PhaseLight} />
      <div className="mt-[-630px]"></div>
      <PhaseFrame />
      <div className="text-[40px] leading-[48px] font-['Trouble_Font'] mt-[-440px] ml-[-30px]">{name}</div>
      <div className={`text-[18px] leading-[23px] font-['Chakra_Petch'] mt-[50px] ml-[-13px] w-[290px] h-[80px] overflow-auto flex text-center ${description.length <= 100 ? 'items-center ' : 'items-start'}`}>{description}</div>
      <PhaseLoaded loaded={loaded} />
      <div className="text-[24px] leading-[31.2px] mt-[-41px] ml-[52px]">{progress}</div>
      <PhaseProgress loaded={loaded} />
      <img className="mt-[-517px] ml-[-49px] mb-[200px] max-w-[390px] max-h-[164px]" src={newImg} alt={`Phase ${image}`} />
    </div>
  )
}

export default PhaseItem;