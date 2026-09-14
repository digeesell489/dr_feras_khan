export type Lang = "en" | "ar";

export function loc(lang: Lang, en: string, ar: string) {
  return lang === "ar" ? ar : en;
}

export function locList(lang: Lang, en: string[], ar: string[]) {
  return lang === "ar" ? ar : en;
}
