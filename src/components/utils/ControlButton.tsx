import { ControlButtonLGBack, ControlButtonMDBack } from "../../assets/svg/controlbuttonback"

type Props = {
  clickHandler?: any,
  buttonCaption: any,
  disabled?: any,
};

const ControlButton = ({ clickHandler, buttonCaption, disabled = false }: Props) => {
  return (
    <button onClick={clickHandler} className="grid z-[1] justify-items-center" style={{ cursor: (disabled ? "not-allowed" : "pointer") }} disabled={disabled}>
      <ControlButtonLGBack />
      <ControlButtonMDBack />
      <div className="font-['Trouble_Font'] text-[40px] tracking-[2px] mt-[-82.5px] md:mt-[-87.5px] pointer-events-none">{buttonCaption !== "Pending" ? buttonCaption : (
        <svg className="animate-spin mr-3 text-white w-[32px] h-[32px] ml-[6px] mt-[12px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#82D9FF" strokeWidth="4"></circle>
          <path className="opacity-75" fill="#00B6EE" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}</div>
    </button>
  )
}

export default ControlButton;