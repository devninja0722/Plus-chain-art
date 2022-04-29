import ROADMAP from "../configs/roadmap.json";
import PhaseItem from "./utils/PhaseItem";
import { PhaseBranch12, PhaseBranch23, PhaseBranch34, PhaseBranch41, PhaseMDBrach12, PhaseMDBrach21 } from "../assets/svg/phasebranch";

const Roadmap = () => {
  var phaseLGItems = [];
  var phaseMDItems = [];
  for (let i = 0; i < ROADMAP.length; i++) {
    var tI = i;
    if (i % 4 === 2 && i + 1 < ROADMAP.length) tI = i + 1;
    if (i % 4 === 3) tI = i - 1;
    var mt = "0px";
    if (tI >= 2) mt = "-270px";
    if (tI === 0 && tI === ROADMAP.length - 1) {
      phaseLGItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
    if (tI % 4 === 2 && tI === ROADMAP.length - 1) {
      phaseLGItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
      phaseLGItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
      phaseLGItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
    if (tI % 4 === 3 && tI === ROADMAP.length - 1) {
      phaseLGItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
    if (tI % 4 >= 2) {
      if (tI < ROADMAP.length - 1) {
        let t = tI % 4;
        phaseLGItems.push(t === 0 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch12 /></div> : (t === 1 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch23 /></div> : (t === 2 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch34 /></div> : <div key={tI} style={{ marginTop: mt }}><PhaseBranch41 /></div>)))
      }
      let item = ROADMAP[tI];
      phaseLGItems.push(<div key={item.name} style={{ marginTop: mt }}><PhaseItem key={item.name} name={item.name} image={item.image} description={item.description} loaded={item.loaded} progress={item.progress} /></div>);
      if (tI % 2 === 0) phaseLGItems.push(<div key={`${tI}blank`} style={{ marginTop: mt }}></div>);
    } else {
      let item = ROADMAP[tI];
      if (tI % 2 === 0) phaseLGItems.push(<div key={`${tI}blank1`} style={{ marginTop: mt }}></div>);
      phaseLGItems.push(<div key={item.name} style={{ marginTop: mt }}><PhaseItem key={item.name} name={item.name} image={item.image} description={item.description} loaded={item.loaded} progress={item.progress} /></div>);
      if (tI < ROADMAP.length - 1) {
        let t = tI % 4;
        phaseLGItems.push(t === 0 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch12 /></div> : (t === 1 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch23 /></div> : (t === 2 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch34 /></div> : <div key={tI} style={{ marginTop: mt }}><PhaseBranch41 /></div>)))
      }
    }
    if (tI % 4 === 1 && tI === ROADMAP.length - 1) {
      phaseLGItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
  }
  for (let i = 0; i < ROADMAP.length; i++) {
    let item = ROADMAP[i];
    let mt = "0";
    if (i !== 0) mt = "-55px";
    phaseMDItems.push(<div key={item.name} className="ml-[64px] md:ml-[195px]" style={{ marginTop: mt }}><PhaseItem key={item.name} name={item.name} image={item.image} description={item.description} loaded={item.loaded} progress={item.progress} /></div>);
    if (i < ROADMAP.length - 1) {
      phaseMDItems.push(<div key={i} className="mt-[-161px] md:mt-[-116px]">{i % 2 === 0 ? <PhaseMDBrach12 /> : <PhaseMDBrach21 />}</div>)
    }
  }
  return (
    <div className="justify-center mt-8" id="roadmap">
      <div className="w-[100%] h-[1900px] bg-no-repeat bg-cover bg-none lg:bg-[url('./assets/img/roadmap/back.png')]"></div>
      <div className="flex justify-center mt-[-1850px] lg:mt-[-1800px] font-['Trouble_Font'] text-[60px] lg:text-[100px] tracking-[5px] leading-[72px] lg:leading-[120px]">Roadmap</div>
      <div className="flex justify-center">
        <div className="gap-x-[0] mt-[64px] min-w-[1201px] hidden lg:grid grid-cols-[85px_359px_313px_359px_85px]">{phaseLGItems}</div>
        <div className="grid justify-items-center gap-0 lg:hidden xs:ml-[0px] ml-[12px]">{phaseMDItems}</div>
      </div>
    </div>
  )
}

export default Roadmap;