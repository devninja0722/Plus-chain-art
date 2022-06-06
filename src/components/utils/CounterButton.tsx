type Props = {
  clickHandler: any;
  buttonCaption: any;
  disabled?: any;
};

const CounterButton = ({ clickHandler, buttonCaption, disabled }: Props) => {
  return (
    <div onClick={disabled ? null : clickHandler} className="w-[50px] h-[50px] text-center leading-[40px] border-[2px] border-[#0094FF] bg-[#0b182de7] hover:bg-[#091526] active:bg-[#003F9A] transition-all duration-200 easin-in cursor-pointer select-none">
      {buttonCaption}
    </div>
  )
}

export default CounterButton;