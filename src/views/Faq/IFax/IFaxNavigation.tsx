import Accordion from "@/components/Accordion";
import { navigationTopics } from "./data";
import chevron from "../assets/down-arrow.png";

const IFaxNavigation = () => {
  return (
    <Accordion
      items={navigationTopics.map(({ title, content }) => ({
        header: title,
        children: content,
        contentClassName: "bg-accent-100",
      }))}
      chevronIcon={chevron}
    />
  );
};

export default IFaxNavigation;
