import type { ReactNode } from "react";

type Props = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bgClassName?: string; // optional background class
};

export default function Section({ id, title, children, className, bgClassName }: Props) {
  return (
    <section
      id={id}
      className={`w-full ${bgClassName || "bg-[#0a0a0e]"} py-16 ${className || ""}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
