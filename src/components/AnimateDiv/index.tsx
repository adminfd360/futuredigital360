import * as motion from "motion/react-client";

type AnimateDivProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const createSlideUpVariants = (delay: number = 0) => ({
  offscreen: {
    transform: "translateY(40px)",
    opacity: 0,
  },
  onscreen: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      type: "spring" as const,
      bounce: 0.4,
      duration: 0.8,
      delay,
    },
  },
});

const AnimateDiv = ({ children, delay = 0, className }: AnimateDivProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3, once: false }}
      variants={createSlideUpVariants(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDiv;
