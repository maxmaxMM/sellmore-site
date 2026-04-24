import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_2px_rgba(96,165,250,0.8)]" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-gradient text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] max-w-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base sm:text-lg text-white/60">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
