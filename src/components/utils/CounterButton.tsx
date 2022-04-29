type Props = {
  clickHandler: any;
  buttonCaption: any;
};

const CounterButton = ({ clickHandler, buttonCaption }: Props) => {
  return (
    <div onClick={clickHandler} className="w-[50px] h-[50px] text-center leading-[40px] border-[2px] border-[#0094FF] hover:bg-[#03224F] active:bg-[#003F9A] transition-all duration-200 easin-in cursor-pointer select-none">
      { buttonCaption }
    </div>
  )
}

export default CounterButton;