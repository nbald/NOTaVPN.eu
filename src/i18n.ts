import frLocale from "./locales/fr.json";
import enLocale from "./locales/en.json";

type Locale = "fr" | "en";
type LocaleData = Record<string, string>;

const locales: Record<Locale, LocaleData> = {
  fr: frLocale as LocaleData,
  en: enLocale as LocaleData,
};

let currentLocale: Locale = (localStorage.getItem("locale") as Locale) || "fr";

export function t(key: string): string {
  return locales[currentLocale]?.[key] ?? key;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  localStorage.setItem("locale", locale);
  document.documentElement.lang = locale;
  updateDOM();
}

export function toggleLocale(): void {
  setLocale(currentLocale === "fr" ? "en" : "fr");
}

function updateDOM(): void {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")!;
    el.textContent = t(key);
  });

  document.querySelectorAll<HTMLInputElement>("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder")!;
    el.placeholder = t(key);
  });

  // Update lang toggle button text
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLocale === "fr" ? "EN" : "FR";
  }
}

export function initI18n(): void {
  document.documentElement.lang = currentLocale;
  updateDOM();
}
