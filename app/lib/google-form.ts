/** Existing Sell More Studio Google Form. All questions are short text. */
export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/1FB8Q_qomwPU0fwnvh7bGB5Td9OMTOvDhqLRgCAFj9Tc/formResponse";

export const FORM_FIELDS = {
  businessName: "entry.1266170559",
  businessType: "entry.1577590194",
  offer: "entry.53801449",
  imageLink: "entry.1100204033",
  phone: "entry.1187638745",
  email: "entry.40614474",
} as const;

export const FORM_IFRAME_NAME = "sellmore-form-sink";

/**
 * Image link is required by the form, but it is not URL-validated.
 * An empty value returns HTTP 400. This note is accepted with HTTP 200.
 */
export const NO_IMAGE_LINK = "No image link provided";
