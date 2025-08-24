import type{ ReactNode } from "react";

type Props = { id: string; title?: string; children: ReactNode; className?: string };
export default function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 ${className || ""}`}>
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}
