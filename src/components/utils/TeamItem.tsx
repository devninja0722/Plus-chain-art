import TeamFrame from "../../assets/svg/teamframe";

type Props = {
  role: any;
  photo: any;
}

const TeamItem = ({ role, photo }: Props) => {
  const newPhoto = require('../../assets/img/team/' + photo);
  return (
    <div className="justify-items-center">
      <TeamFrame />
      <div className="font-['Chakra_Petch'] text-center text-[20px] leading-[26px] tracking-[1px] mt-[16px] pointer-events-none">Team Member</div>
      <div className="font-['Chakra_Petch'] text-center text-[16px] text-[#7E7E7E] leading-[26px] tracking-[1px] mt-[4px] pointer-events-none">{ role }</div>
      <img className="w-[250px] h-[250px] mt-[-380px] ml-[20px]" src={newPhoto} alt="pho"/>
    </div>
  )
}

export default TeamItem;