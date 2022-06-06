import Accordion from "./utils/Accordion";
import FAQDATA from "../constants/faq.json";

const FAQs = () => {
  return (
    <div className="justify-center py-10 mt-10 lg:mt-10" id="faqs">
      <div className="flex justify-center font-['Trouble_Font'] text-[64px] lg:text-[90px] tracking-[5px] leading-[120px]">FAQs</div>
      <Accordion data={FAQDATA} />
    </div>
  )
}

export default FAQs;