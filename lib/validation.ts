// Small, dependency-free input helpers shared by the API routes.

/** Coerce to a trimmed string and cap its length. Non-strings become "". */
export function clamp(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value: string): boolean {
  return value.length <= 320 && EMAIL_RE.test(value);
}

/** Escape user input before interpolating it into an HTML email body. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Collapse whitespace/newlines so a value is safe to use in an email subject. */
export function singleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
