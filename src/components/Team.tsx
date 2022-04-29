import TEAM from "../configs/team.json"
import TeamLight from "../assets/svg/teamlight.svg";
import TeamCarousel from "./utils/TeamCarousel";

const Team = () => {
  return (
    <div className="justify-center mt-20" id="team">
      <div className="flex justify-center mt-[560px] lg:mt-[480px]"><img alt="Team Light" src={ TeamLight } /></div>
      <div className="flex justify-center mt-[-580px] lg:mt-[-640px] font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[5px] leading-[120px]">TEAM</div>
      <TeamCarousel teamData={ TEAM } />
    </div>
  )
}

export default Team;