type Props = {
  loaded: number;
}

const PhaseProgress = ({ loaded }: Props) => {
  var rects = [];
  var x = 0;
  for (let i = 0; i < 16; i++) {
    var isLoaded = i < (loaded * 16 / 100);
    rects.push(<rect key={i} x={x + (isLoaded ? 0 : 0.5)} y={(isLoaded ? 0 : 0.5)} width={(isLoaded ? 16 : 15)} height={(isLoaded ? 29 : 28)} fill={(isLoaded ? "#FAFAFA" : "none")} stroke={(isLoaded ? "none" : "#232323")} />);
    x = x + 21;
  }
  return <svg className="mt-[19px] ml-[-23px]" width="310" height="29" viewBox="0 0 310 29" fill="none" xmlns="http://www.w3.org/2000/svg">{rects}</svg>
}

export default PhaseProgress;