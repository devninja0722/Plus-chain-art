type Props = {
  loaded: any;
}

const PhaseLoaded = ({ loaded }: Props) => {
  return (
    <svg className="mt-[50px] ml-[-14px]" width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="28" className="text-[24px] text-[#0066FF] font-[900]" fill="#0066FF" filter="url(#filter0_ddi_49_365)">{`${loaded}%`}</text>
      <defs>
        <filter id="filter0_ddi_49_365" x="0.572028" y="0.599951" width="60" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1.3" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.051 0 0 0 0 0.082 0 0 0 0.7 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_49_365" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.3" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="color-dodge" in2="effect1_dropShadow_49_365" result="effect2_dropShadow_49_365" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_49_365" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-0.13" dy="0.26" />
          <feGaussianBlur stdDeviation="0.065" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_49_365" />
        </filter>
      </defs>
    </svg>
  )
}

export default PhaseLoaded;