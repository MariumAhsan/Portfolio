import React from "react";

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "a";
  href?: string;
  className?: string;
};

export function Button({ as, href, className = "", ...props }: BtnProps) {
  // Default styles for a brand-colored button
  const base =
    "inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border border-transparent bg-brand text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition shadow";

  if (as === "a" && href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={`${base} ${className}`} {...anchorProps} />
    );
  }

  return <button className={`${base} ${className}`} {...props} />;
}
