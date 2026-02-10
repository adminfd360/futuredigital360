import { cx } from "@/lib/utils";

type RibbonProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
};

const Ribbon = ({ text, color, backgroundColor }: RibbonProps) => {
  return (
    <div
      className={cx(
        "w-fit border-y-[0.5em] border-y-transparent [padding-inline:calc(1.5em+.25em)_0.5em] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_calc(100%-_.25em),.8em_50%,0_.25em)] text-white text-lg font-semibold leading-10",
        color ? `text-[${color}]` : "text-white",
        backgroundColor
          ? `[background:radial-gradient(.2em_50%_at_right,#000a,#0000)_border-box,${backgroundColor}_padding-box]`
          : "[background:radial-gradient(.2em_50%_at_right,#000a,#0000)_border-box,#155196_padding-box]",
      )}
    >
      {text}
    </div>
  );
};

export default Ribbon;
