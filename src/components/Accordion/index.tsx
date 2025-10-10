"use client";
import {
  Accordion as BaseAccordion,
  AccordionItem as BaseItem,
} from "@szhsin/react-accordion";
import Image from "next/image";
import { cx } from "@/lib/utils";

type AccordionItemProps = {
  header: React.ReactNode;
  index?: number;
  initialEntered?: boolean;
  children: React.ReactNode;
  chevronIcon?: any;
  showNumber?: boolean;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  panelClassName?: string;
};

type AccordionProps = {
  items: AccordionItemProps[];
  className?: string;
  transition?: boolean;
  transitionTimeout?: number;
  chevronIcon?: any;
  showNumber?: boolean;
};

const AccordionItem = ({
  header,
  index = 0,
  chevronIcon,
  showNumber = true,
  className,
  buttonClassName,
  contentClassName,
  panelClassName,
  ...rest
}: AccordionItemProps) => (
  <BaseItem
    {...rest}
    className={cx(
      "border-b-[1px] border-brand-500/40 border-dotted",
      className
    )}
    header={({ state: { isEnter } }) => (
      <div className="flex items-center gap-4 relative w-full">
        {showNumber && (
          <span className="w-[34px] h-[34px] border-[1px] border-brand-500 rounded-full text-center flex justify-center items-center text-sm font-bold bg-white text-black">
            {index + 1}
          </span>
        )}
        <span className="tracking-widest font-semibold">{header}</span>
        {chevronIcon && (
          <Image
            className={cx(
              "opacity-50 absolute right-0 top-1 transition-transform duration-200 ease-out w-[24px] h-auto",
              isEnter && "rotate-180 invert-100 opacity-100"
            )}
            src={chevronIcon}
            alt="Chevron"
          />
        )}
      </div>
    )}
    buttonProps={{
      className: ({ isEnter }) =>
        cx(
          "flex w-full p-3 pl-8 text-left cursor-pointer transition-all hover:bg-gradient-to-r hover:from-brand-500 hover:to-brand-600 hover:text-white hover:[&>div>img]:invert-100 hover:[&>div>img]:opacity-100",
          isEnter && "bg-gradient-to-r from-brand-500 to-brand-600 text-white",
          buttonClassName
        ),
    }}
    contentProps={{
      className: cx(
        "transition-height duration-200 ease-out",
        contentClassName
      ),
    }}
    panelProps={{
      className: cx("py-6 px-8 leading-8 text-base", panelClassName),
    }}
  />
);

const Accordion = ({
  items,
  className,
  transition = true,
  transitionTimeout = 200,
  chevronIcon,
  showNumber = true,
}: AccordionProps) => {
  return (
    <BaseAccordion
      transition={transition}
      transitionTimeout={transitionTimeout}
      className={cx(
        "mt-12 rounded-md overflow-hidden shadow-[0px_0px_8px_4px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          index={index}
          chevronIcon={chevronIcon || item.chevronIcon}
          showNumber={
            item.showNumber !== undefined ? item.showNumber : showNumber
          }
        />
      ))}
    </BaseAccordion>
  );
};

export default Accordion;
export { AccordionItem };
