import Accordion from "@/components/Accordion";
import { sendingTopics } from "./data";
import chevron from "../assets/down-arrow.png";

const IFaxSending = () => {
  return (
    <Accordion
      items={sendingTopics.map(({ title, content }) => ({
        header: title,
        children: content,
        contentClassName: "bg-accent-100",
      }))}
      chevronIcon={chevron}
    />
  );
};

export default IFaxSending;
