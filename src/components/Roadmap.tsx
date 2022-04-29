const Roadmap = () => {
  const styleParagraph = "flex justify-center mt-[0px] font-['Chakra_Petch'] text-[#7E7E7E] text-[14px] lg:text-[20px] lg:mt-[16px] tracking-[1px] leading-[22.4px]"
  const styleTitle = "text-left font-bold mt-5 w-[90%] lg:w-[50%]"
  const styleDetail = "text-left w-[90%] lg:w-[50%] indent-4"
  return (
    <div className="justify-center py-10 mt-0 lg:mt-10" id="roadmap">
      <div className="flex justify-center font-['Trouble_Font'] text-[64px] lg:text-[90px] tracking-wider leading-[120px]">Roadmap</div>
      <div className={styleParagraph}>
        <span className={styleTitle}>
          PULSECHAIN ART (May – June 2022)
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleDetail}>
          PulseChainArt is a collection that is randomly generated, non-fungible tokens, also known as an "NFT". Owners gain access to community benefits such as additional FREE NFTs and crypto related raffles and prizes. There are 10,000 PulseChainArt and each is completely unique. No two PulseChainArt are the same. They were generated from a smart contract using over 75 different traits. PulseChainArt are minted, stored, and traded on the Ethereum blockchain.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleTitle}>
          HEXART (August – September 2022)
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleDetail}>
          HexArt are randomly generated, non-fungible tokens, also known as an "NFT". Owners gain access to community benefits such as additional FREE NFTs and crypto related raffles and prizes. There will be 10,000 HexArt and each is completely unique. No two are the same. They were generated from a smart contract using over 75 different traits. HexArt are minted, stored, and traded on the Ethereum blockchain.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleTitle}>
          PULSEXART (November – December 2022)
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleDetail}>
          PulseXArt are randomly generated, non-fungible tokens, also known as an "NFT". Owners gain access to community benefits such as additional FREE NFTs and crypto related raffles and prizes. There will be 10,000 PulseXArt and each is completely unique. No two are the same. They were generated from a smart contract using over 75 different traits. PulseXArt are minted, stored, and traded on the Ethereum blockchain.
        </span>
      </div>
    </div>
  )
}

export default Roadmap;