const PulseChainArt = () => {
  const styleParagraph = "flex justify-center mt-[0px] font-['Chakra_Petch'] text-[#7E7E7E] text-[14px] lg:text-[20px] lg:mt-[16px] tracking-[1px] leading-[22.4px]"
  const styleQuestion = "text-left font-bold mt-5 w-[90%] lg:w-[50%]"
  const styleAnswer = "text-left w-[90%] lg:w-[50%] indent-4"
  return (
    <div className="justify-center py-10 mt-0 lg:mt-10" id="pulsechainart">
      <div className="flex justify-center font-['Trouble_Font'] text-[64px] lg:text-[90px] tracking-wider leading-[120px]">PulseChain Art</div>
      <div className={styleParagraph}>
        <span className={styleQuestion}>
          What Is PulseChainArt and Why Buy This NFT?
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          PulseChainArt is a collection dedicated to <b>PulseChain</b> (coolest and innovative technology) and to the attributes (including his clothing and accessories) of its founder Richard Heart (the face of PulseChain). These NFTs are fantastic digital collectibles to hold as the pervasiveness of PulseChain, PulseX and HEX (cryptos that make ordinary people very rich) come to be in the near future.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleQuestion}>
          What is PulseChain?
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          PulseChain is <b>a new blockchain which was created by using Ethereum, changing a portion of its code</b>, and making it faster and cheaper to transact on. All tokens (including currencies and NFTs) present on Ethereum blockchain are also brought into PulseChain.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleQuestion}>
          What are the benefits Of PulseChain?
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Increase Ethereum's value.</u> Ethereum's gas fees will be lowered by sharing its load.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Enrich ETH users.</u> PulseChain will re-enable priced-out use cases. That is, instead of launching empty, PulseChain brings the ETH system state and ERC20s, this rewards holders and founders of Ethereum based projects.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Enrich ERC20 and NFT users.</u> Thousands of Ethereum based tokens and NFTs receive their free PulseChain versions. This new gold rush contains the value discovery of thousands of tokens and NFTs on PulseChain. This is a big opportunity to be a whale of ERC20s or NFTs.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Easy to use.</u> Only your MetaMask wallet is put to work after changing a single setting to access PulseChain. For ETH holders, they can transact for free with freemium PLS.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Lower PulseChain fees and serve more users.</u> PulseChain increases the throughput of Ethereum 4x by using 3secs block times. Ethereum's average block time is around 13 seconds.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Remove Pollution.</u> By replacing proof of work miners with validators, PulseChain doesn't burn "waste" any energy making it environmentally friendly.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Improve game theory.</u> PulseChain has 0% inflation. Validators only earn fees and 25% of the fees are burnt to reduce the circulating supply.
        </span>
      </div>
      <div className={styleParagraph}>
        <span className={styleAnswer}>
          <u>Empower PulseChain holders.</u> PulseChain's native token $PLS can be delegated to validators that reward the delegators with the largest percentage of fees.
        </span>
      </div>
    </div>
  )
}

export default PulseChainArt;