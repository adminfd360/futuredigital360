import type { Variants } from "motion/react";

export const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Parent variant for a clipped list row. Carries no animated properties — it
 * exists so the child line can inherit `hidden`/`show` through variant
 * propagation.
 *
 * This split matters: the observed element must be the one that never
 * transforms. If `whileInView` sits on the translated child instead, the
 * overflow-hidden clip on its parent leaves it with zero intersection area
 * and the reveal never fires.
 */
export const LIST_ITEM: Variants = {
  hidden: {},
  show: {},
};

/** Child line that slides up out of the clip, staggered by row index. */
export const lineVariants = (index: number): Variants => ({
  hidden: { y: "105%" },
  show: {
    y: 0,
    transition: { duration: 0.85, delay: index * 0.06, ease: EASE },
  },
});
