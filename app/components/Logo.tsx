export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/sellmore-logo.png"
      alt="SellMore Studio"
      className={`h-35 w-auto object-contain ${className}`}
    />
  );
}