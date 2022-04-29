import { useEffect, useState } from "react";
import TeamItem from "./TeamItem";

type Props = {
  teamData: any;
};

const TeamCarousel = ({teamData}: Props) => {
  const [selected, setSelected] = useState(0);
  const [carBtns, setCarBtns] = useState([]);
  const ITEM_WIDTH = 410;

  useEffect(() => {
    let newArr: any = [];
    for(let i = 0; i < teamData.length; i ++) {
      let newVar = "";
      if (selected === i) {
        newVar = "36px";
      } else {
        newVar = "6px";
      }
      newArr.push(<div key={i} onClick={ onCarBtnClick.bind(null, i) } style={{ cursor: "pointer", background: (selected === i ? "#0094FF" : "#FAFAFA"),  width: newVar, height: "6px", transition: "all cubic-bezier(0.4, 0, 0.2, 1) 150ms" }}></div>);
    }
    setCarBtns(newArr);
  }, [selected, teamData]);

  const onCarBtnClick = (i: any) => {
    setSelected(i);
  }
  
  return (
    <div className="grid grid-cols-1 place-items-center">
      <div className="w-[315px] lg:w-[1150px] h-[450px] overflow-hidden lg:overflow-auto">
        <div className="flex space-x-[15px] gap-[80px] transition-all ease-in-out duration-300" style={{ marginLeft: `${0 - ITEM_WIDTH * selected}px` }}>
          {
            teamData && teamData.length > 0 && teamData.map((item: { role: any; photo: any; }) => 
              <TeamItem key={item.role} role={item.role} photo={item.photo} />
            )
          }
        </div>
      </div>
      <div className="flex lg:hidden mt-[10px] space-x-[5px]">{ carBtns }</div>
    </div>
  )
}

export default TeamCarousel;