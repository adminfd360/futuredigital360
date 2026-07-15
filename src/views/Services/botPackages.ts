/**
 * Block of Time pricing. Shared by both BOT page designs so the two can never
 * drift apart — update here, not in the views.
 *
 * Hours and price are the only authored values; the effective rate is derived
 * so it cannot disagree with them.
 */
export type BotPackage = {
  name: string;
  hours: number;
  price: number;
};

export const botPackages: BotPackage[] = [
  { name: "BOT 10", hours: 10, price: 1350 },
  { name: "BOT 20", hours: 20, price: 2350 },
  { name: "BOT 40", hours: 40, price: 3950 },
];

export const BOT_PRICING_NOTE =
  "All hours must be prepaid prior to service delivery.";

export const effectiveRate = ({ price, hours }: BotPackage) => price / hours;

export const formatPrice = (value: number) => `$${value.toLocaleString("en-US")}`;

export const formatHours = (value: number) => `${value} Hours`;

/**
 * Whole rates are written without decimals ($135/hr) and fractional ones with
 * two ($117.50/hr) — matches how the rates were supplied.
 */
export const formatRate = (value: number) =>
  Number.isInteger(value) ? `$${value}/hr` : `$${value.toFixed(2)}/hr`;

/**
 * How much lower this package's hourly rate is than the smallest block's,
 * as a whole percentage. Returns 0 for the baseline package itself.
 */
export const savingsVsSmallest = (pkg: BotPackage) => {
  const baseline = effectiveRate(botPackages[0]);
  if (baseline === 0) return 0;
  return Math.round(((baseline - effectiveRate(pkg)) / baseline) * 100);
};
