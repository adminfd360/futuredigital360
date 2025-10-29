import { cx } from "@/lib/utils";

type Props = {
  variant?: "hero" | "title" | "subtitle" | "caption" | "body";
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Text = ({ variant = "body", children, className, as }: Props) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "hero":
        return "font-semibold text-[30px] lg:text-[45px] text-white";
      case "title":
        return "font-bold text-[36px] text-black";
      case "subtitle":
        return "font-semibold text-[32px] text-black";
      case "caption":
        return "font-semibold text-[20px]";
      case "body":
        return "font-normal text-[16px]";
      default:
        return "font-normal text-[16px]";
    }
  };

  const Component = as || "p";

  return (
    <Component className={cx(getVariantStyles(), className)}>
      {children}
    </Component>
  );
};

export default Text;
