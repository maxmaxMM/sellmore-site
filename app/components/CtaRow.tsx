import Link from "next/link";
import {
  DEMO_DISPLAY,
  DEMO_TEL,
  FREE_SAMPLE_URL,
  GOOGLE_CHECK_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  type CtaEmphasis,
} from "../lib/site";

type Item = {
  key: string;
  label: string;
  href: string;
  external?: boolean;
};

const sample: Item = {
  key: "sample",
  label: "Free sample / demo",
  href: FREE_SAMPLE_URL,
  external: true,
};
const google: Item = {
  key: "google",
  label: "Free Google check",
  href: GOOGLE_CHECK_HREF,
};
const contact: Item = {
  key: "contact",
  label: "Get started",
  href: "/get-started",
};
const whatsapp: Item = {
  key: "whatsapp",
  label: `WhatsApp ${WHATSAPP_DISPLAY}`,
  href: WHATSAPP_URL,
  external: true,
};
const demo: Item = {
  key: "demo",
  label: `Test AI receptionist ${DEMO_DISPLAY}`,
  href: DEMO_TEL,
};

const primaryFor: Record<CtaEmphasis, Item> = {
  sample: { ...sample, label: "Get free sample / demo" },
  demo: { ...demo, label: `Test live AI receptionist: ${DEMO_DISPLAY}` },
  google: { ...google, label: "Free Google profile check" },
  contact: { ...contact, label: "Contact us" },
};

function Action({
  item,
  className,
}: {
  item: Item;
  className: string;
}) {
  if (item.external || item.href.startsWith("tel:") || item.href.endsWith(".html") || item.href.includes("checkup.html")) {
    return (
      <a
        href={item.href}
        className={className}
        {...(item.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export default function CtaRow({
  emphasis = "sample",
}: {
  emphasis?: CtaEmphasis;
}) {
  const primary = primaryFor[emphasis];
  const secondary = [sample, google, contact, whatsapp, demo].filter(
    (item) => item.key !== primary.key,
  );

  return (
    <div className="flex flex-col gap-3">
      <Action item={primary} className="btn-primary w-full sm:w-auto" />
      <div className="flex flex-wrap gap-2">
        {secondary.map((item) => (
          <Action
            key={item.key}
            item={item}
            className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-white/[0.03] px-3.5 text-[13px] font-medium text-white/75 transition-colors hover:border-white/25 hover:text-white"
          />
        ))}
      </div>
    </div>
  );
}
