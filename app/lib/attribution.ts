/**
 * First-touch attribution for SEO reporting: the page a visitor first landed on,
 * where they came from, and any UTM tags. Stored only in this visitor's browser
 * and sent along with an enquiry. Storage can be blocked, so every access is guarded.
 */
const KEY = "sms_first_touch";
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "src",
] as const;

export type FirstTouch = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing_page: string;
  referrer: string;
  first_seen: string;
};

function read(): FirstTouch | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FirstTouch) : null;
  } catch {
    return null;
  }
}

function current(): FirstTouch {
  const query = new URLSearchParams(window.location.search);
  const touch: FirstTouch = {
    landing_page: window.location.pathname,
    referrer: document.referrer,
    first_seen: new Date().toISOString(),
  };
  for (const name of PARAMS) {
    const value = query.get(name);
    if (value) touch[name] = value.slice(0, 100);
  }
  return touch;
}

/** Call once per page load. Keeps the first visit; never overwrites it. */
export function captureFirstTouch() {
  if (read()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(current()));
  } catch {
    // Private mode or blocked storage: getFirstTouch falls back to this page.
  }
}

export function getFirstTouch(): FirstTouch {
  return read() ?? current();
}
