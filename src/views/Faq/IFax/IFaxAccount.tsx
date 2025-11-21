import Accordion from "@/components/Accordion";
import { accountTopics } from "./data";
import chevron from "../assets/down-arrow.png";

const IFaxAccount = () => {
  return (
    <Accordion
      items={accountTopics.map(({ title, content }) => ({
        header: title,
        children: content,
        contentClassName: "bg-accent-100",
      }))}
      chevronIcon={chevron}
    />
  );
};

export default IFaxAccount;
