import PackFrame from "../../assets/svg/packframe";

type Props = {
  packName: any;
  imageSrc: any;
};

const PackItem = ({ packName, imageSrc } : Props) => {
  return (
    <div className="justify-items-center pb-[80px]">
      <PackFrame />
      <div className="font-['Trouble_Font'] text-center ml-[-8px] text-[20px] leading-[24px] tracking-[5px] mt-[-34px] pointer-events-none">{ packName }</div>
      <img className="ml-[12px] mt-[-354px]" src={ imageSrc } alt="thumbnail" />
    </div>
  )
}

export default PackItem;