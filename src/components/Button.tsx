import { ArrowRight } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";

type LuxuryButtonProps = {
  children: ReactNode;
  to?: string;
  variant?: "cream" | "terracotta" | "outline";
  className?: string;
  ariaLabel?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

export function LuxuryButton({
  children,
  to,
  variant = "cream",
  className = "",
  ariaLabel,
  type = "button",
  onClick,
}: LuxuryButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">
        <ArrowRight size={20} strokeWidth={1.35} />
      </span>
    </>
  );

  const classNames = `luxury-button luxury-button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classNames} to={to} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classNames} type={type} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

type IconArrowProps = {
  label: string;
  to?: string;
  className?: string;
};

export function IconArrow({ label, to, className = "" }: IconArrowProps) {
  const classNames = `icon-arrow ${className}`.trim();

  if (to) {
    return (
      <Link className={classNames} to={to} aria-label={label}>
        <ArrowRight size={21} strokeWidth={1.35} />
      </Link>
    );
  }

  return (
    <span className={classNames} aria-label={label} role="img">
      <ArrowRight size={21} strokeWidth={1.35} />
    </span>
  );
}
