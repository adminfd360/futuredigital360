import Link from "next/link";
import { cx } from "@/lib/utils";

type ButtonProps = {
  variant: "primary" | "secondary" | "outline";
  label: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  variant,
  label,
  className: customClassName,
  href,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const className = cx(
    "w-auto border rounded-sm px-3 py-3 text-center font-semibold inline-block cursor-pointer transition-all duration-300",
    variant === "primary" &&
      "bg-brand-600 text-white hover:bg-gray-100 hover:text-text-DEFAULT hover:border-gray-200 shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)]",
    variant === "secondary" &&
      "bg-gray-100 border-gray-200 hover:bg-brand-600 hover:text-white text-text-DEFAULT",
    variant === "outline" &&
      "text-gray-100 border-gray-100 hover:text-text-DEFAULT hover:border-gray-200 hover:bg-gray-100 rounded-md",
    customClassName
  );

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button className={cx(className)} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
