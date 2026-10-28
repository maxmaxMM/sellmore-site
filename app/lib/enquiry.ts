import { getFirstTouch } from "./attribution";

/** n8n intake that writes the enquiry into the Sell More Studio GHL sub-account. */
export const ENQUIRY_WEBHOOK =
  process.env.NEXT_PUBLIC_ENQUIRY_WEBHOOK ??
  "https://sellmorestudio.app.n8n.cloud/webhook/website-enquiry";

export type Enquiry = {
  business_name: string;
  business_type: string;
  offer: string;
  image_link: string;
  phone: string;
  email: string;
  service: string;
  hp: string;
};

/**
 * Fire-and-forget copy of an enquiry for GHL. The Google Form submission stays the
 * primary record, so a failure here never blocks the visitor. A form-encoded no-cors
 * POST avoids a CORS preflight; the response is not readable and not needed.
 */
export function sendEnquiry(enquiry: Enquiry) {
  const body = new URLSearchParams({
    ...enquiry,
    ...getFirstTouch(),
    enquiry_page: window.location.pathname,
  });
  try {
    void fetch(ENQUIRY_WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      body,
    }).catch(() => {});
  } catch {
    // Never let the GHL copy break the form.
  }
}
