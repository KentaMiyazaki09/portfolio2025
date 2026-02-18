/**
 * URLの正規化
 * http/httpsのみ許可
 */
export function normalizeWorkUrl(input: string | undefined | null) {
  if (!input) return null;

  try {
    const url = new URL(input);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString();
  } catch {
    return null;
  }
}
