import RarityLGFrame from "../assets/svg/raritylgframe";
import RarityMDFrame from "../assets/svg/raritymdframe";
import MightyLGDog from "../assets/img/rarity/mighty_dog.png";
import MightyMDDog from "../assets/img/rarity/mighty_dog_sm.png";
import FrameBack from "../assets/img/rarity/frameback.png";
import RARITY from "../constants/rarity.json";

const Rarity = () => {
  return (
    <div className="justify-center mt-[60px] lg:mt-[130px]" id="rarity">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[5px] leading-[120px]">Rarity</div>
      <div className="flex justify-center mt-[10px] lg:mt-[30px]">
        <RarityLGFrame rarityData={RARITY} mightyDog={MightyLGDog} frameBack={FrameBack} /></div>
      <div className="flex lg:hidden max-w-[204px] max-h-[390.33px] md:ml-[184px]"><img src={MightyMDDog} alt="" />
        <RarityMDFrame rarityData={RARITY} />
      </div>
    </div>
  )
}

export default Rarity;