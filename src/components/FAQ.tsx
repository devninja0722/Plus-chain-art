import Accordion from "./utils/Accordion";
import FAQDATA from "../configs/faq.json";

const FAQ = () => {
  return (
    <div className="justify-center mt-10 lg:mt-10" id="faq">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[5px] leading-[120px]"><a href="#faq">FAQ</a></div>
      <Accordion data={ FAQDATA } />
    </div>
  )
}

export default FAQ;