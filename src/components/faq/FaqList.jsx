import FaqItem from "./FaqItem";
import { faqs } from "../../assets/data/faqs";

export default function FaqList() {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, idx) => (
        <FaqItem item={item} key={idx} />
      ))}
    </ul>
  );
}
