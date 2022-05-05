import TEAMDATA from "../configs/team.json"
import TwitterIcon from "../assets/svg/twitter"
import LinkedinIcon from "../assets/svg/linkedin"
import LinkIcon from "../assets/svg/link"

const Team = () => {
  const photos: any = []
  // eslint-disable-next-line array-callback-return
  TEAMDATA.map((item) => {
    let newPhoto = require('../assets/img/team/' + item.photo);
    photos.push(newPhoto)
  })
  const styleAnchor = "fill-[#FAFAFA] hover:fill-[#0094FF] transition-all duration-150 ease-out scale-[1.2] mt-1"

  return (
    <div className="justify-center py-10 mt-0 lg:mt-10" id="team">
      <div className="flex justify-center font-['Trouble_Font'] text-[64px] lg:text-[90px] tracking-wider leading-[120px]">Team</div>
      <div className="flex justify-center mt-[0px] font-['Chakra_Petch'] text-[#7E7E7E] text-[16px] lg:text-[20px] lg:mt-[16px] tracking-[1px] leading-[22.4px]">
        <span className="text-center max-w-[90%] lg:max-w-[50%]">
          We are Passionate and Loyal Hexicans, PulseChainers and PulseXers who believe in Richard Heart’s vision for the Crypto industry.  We also love Richard’s dedication to the SENS Research foundation.
        </span>
      </div>
      <div className="grid justify-center w-full grid-cols-1 gap-4 m-auto mt-8 md:w-3/5 md:grid-cols-2">
        {
          TEAMDATA.map((item, idx) =>
            <div key={idx} className="grid justify-center gap-2">
              <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] bg-contain">
                <img src={photos[idx]} alt={item.name}></img>
              </div>
              <div className="text-center text-[24px] font-extrabold">{item.name}</div>
              <div className="flex justify-center w-full gap-4">
                {
                  item.linkedin && <a href={item.linkedin} target="_blank" rel="noreferrer" className={styleAnchor}><LinkedinIcon /></a>
                }
                {
                  item.twitter && <a href={item.twitter} target="_blank" rel="noreferrer" className={styleAnchor}><TwitterIcon /></a>
                }
                {
                  item.other && <a href={item.other} target="_blank" rel="noreferrer" className={styleAnchor}><LinkIcon /></a>
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Team;