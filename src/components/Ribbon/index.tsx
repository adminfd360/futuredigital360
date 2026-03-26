type RibbonProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
};

const Ribbon = ({ text, color, backgroundColor }: RibbonProps) => {
  const bg = backgroundColor ?? "#155196";

  return (
    <div
      className="w-fit border-y-[0.5em] border-y-transparent [padding-inline:calc(1.5em+.25em)_0.5em] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_calc(100%-_.25em),.8em_50%,0_.25em)] text-base font-semibold leading-10 min-w-[213px]"
      style={{
        color: color ?? "#ffffff",
        background: `radial-gradient(.2em 50% at right, #000a, #0000) border-box, ${bg} padding-box`,
      }}
    >
      {text}
    </div>
  );
};

export default Ribbon;
