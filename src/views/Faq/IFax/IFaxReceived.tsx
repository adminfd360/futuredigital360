import Accordion from "@/components/Accordion";
import { receivedTopics } from "./data";
import chevron from "../assets/down-arrow.png";

const IFaxReceived = () => {
  return (
    <Accordion
      items={receivedTopics.map(({ title, content }) => ({
        header: title,
        children: content,
        contentClassName: "bg-accent-100",
      }))}
      chevronIcon={chevron}
    />
  );
};

export default IFaxReceived;
