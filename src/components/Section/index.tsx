import { cx } from "@/lib/utils";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Section = ({ className, style, children }: Props) => {
  return (
    <div className={cx("w-full py-16 lg:py-24", className)} style={style}>
      <div className="w-full max-w-[1500px] m-auto px-4 relative">
        {children}
      </div>
    </div>
  );
};

export default Section;
