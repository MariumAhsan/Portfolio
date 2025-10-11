import type { ReactNode } from "react";

type Props = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bgClassName?: string; // optional background override
};

export default function Section({ id, title, children, className, bgClassName }: Props) {
  return (
    <section
      id={id}
      className={`
        w-full relative py-20 px-4
        ${bgClassName || "bg-black/20 backdrop-blur-md border border-white/5"}
        ${className || ""}
      `}
    >
      {/* Subtle glow accent at top and bottom edges */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />

      {/* Section Content */}
      <div className="relative mx-auto max-w-6xl text-center">
        {title && (
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-400 to-teal-300 animate-gradient-x">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
