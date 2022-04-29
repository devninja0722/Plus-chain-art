const YellowTape = () => {
  return (
    <div className="mt-[16px] justify-center">
      <div className="w-[calc(100%+1px)] ml-[-1px] h-[120px] z-10 bg-[url('./assets/svg/yellowneon.svg')]"></div>
      <div className="w-[calc(100%+50px)] ml-[-50px] h-[93px] mt-[-107.5px] z-50 bg-[url('./assets/svg/yellowoverlay.svg')]"></div>
      <div className="flex justify-center mt-[-70px] uppercase font-black font-['Chakra_Petch'] text-[#0B0B0B] text-center text-[16px] leading-[21px] md:text-[24px] md:leading-[24px] lg:text-[36px] tracking-[1px] lg:leading-[47px]">$HANDLER tokens can be used in later phases of the roadmap</div>
    </div>
  )
}

export default YellowTape;