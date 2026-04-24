export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#60a5fa] to-[#2563eb] shadow-[0_8px_20px_-8px_rgba(59,130,246,0.8)]">
        <span className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_55%)]" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-4 w-4"
          aria-hidden
        >
          <path
            d="M5 14.5L10 9.5L13.5 13L19 7"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="19" cy="7" r="1.5" fill="white" />
        </svg>
      </span>
      <span className="text-[15px] text-white">
        SellMore <span className="text-white/60">Studio</span>
      </span>
    </span>
  );
}
