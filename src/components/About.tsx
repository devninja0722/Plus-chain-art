import HEADER from "../configs/menu.json"

const About = () => {
  return (
    <div className="justify-center py-10 mt-0 lg:mt-10" id="about">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[90px] tracking-wider leading-[120px]">About</div>
      <div className="flex justify-center mt-[0px] font-['Chakra_Petch'] text-[#7E7E7E] text-[16px] lg:text-[20px] lg:mt-[16px] tracking-[1px] leading-[22.4px]">
        <span className="text-center max-w-[90%] lg:max-w-[50%]">
          All PulseChainers, PulseXers and Hexicans love Richard Heart and <b>PULSECHAIN ART</b>
        </span>
      </div>
      <div className="flex justify-center mt-[8px] lg:mt-[16px] font-['Chakra_Petch'] text-[#7E7E7E] text-[16px] lg:text-[20px] tracking-[1px] leading-[25.2px]">
        <span className="text-center max-w-[90%] lg:max-w-[50%]">
          PulseChainArt is a private collection of 10,000 NFTs (unique digital collectibles) each stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Made from 72 attributes showcasing Richard Heart’s (Founder of HEX, PulseChain, and PulseX) big personality, fashion, and accessories. Each PulseChainArt NFT is unique
        </span>
      </div>
      <div className="flex justify-center mt-[8px] lg:mt-[16px] font-['Chakra_Petch'] text-[#7E7E7E] text-[16px] lg:text-[20px] tracking-[1px] leading-[25.2px]">
        <span className="text-center max-w-[90%] lg:max-w-[50%]">
          Most importantly, PulseChainArt is a community dedicated to doing good – where kindness costs you nothing and can actually earn you cash. In addition, you are helping a cause.  Following Richard Heart’s footsteps, the PulseChainArt team plans to donate 10% of our proceeds to the SENS Research Foundation.
        </span>
      </div>
      <div className="flex justify-center mt-[8px] lg:mt-[16px] font-['Chakra_Petch'] text-[#7E7E7E] text-[16px] lg:text-[20px] tracking-[1px] leading-[25.2px]">
        <span className="text-center max-w-[90%] lg:max-w-[50%]">
          Join <a href={HEADER["discord-link"]} target="_blank" rel="noreferrer" className="underline transition-all duration-150 ease-out underline-offset-2 hover:underline-offset-[3px]">Discord</a> to learn more.
        </span>
      </div>
    </div>
  )
}

export default About;