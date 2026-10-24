/* eslint-disable @next/next/no-img-element */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/sellmore-logo.png"
      alt="Sell More Studio"
      className={`h-20 w-auto object-contain md:h-28 ${className}`}
    />
  );
}