import "./styles/main.css";
import { initI18n, toggleLocale, t } from "./i18n";

// ── i18n ──
initI18n();

// Language toggle
document.getElementById("lang-toggle")?.addEventListener("click", toggleLocale);

// ── Mobile menu ──
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");

mobileMenuBtn?.addEventListener("click", () => {
  mobileNav?.classList.toggle("open");
});

// Close mobile nav on link click
mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav?.classList.remove("open");
  });
});

// ── Fake signup form ──
const signupForm = document.getElementById("signup-form") as HTMLFormElement | null;
const signupSuccess = document.getElementById("signup-success");

signupForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  signupSuccess?.classList.remove("hidden");
  signupSuccess!.textContent = t("hero.success");
});

// ── FAQ accordion ──
document.querySelectorAll(".faq-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".faq-item")!;
    const answer = item.querySelector(".faq-answer")!;
    const isOpen = item.classList.contains("open");

    // Close all
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("open");
      faq.querySelector(".faq-answer")?.classList.remove("open");
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add("open");
      answer.classList.add("open");
    }
  });
});

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// ── Navbar scroll effect ──
const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    nav?.classList.add("shadow-lg");
  } else {
    nav?.classList.remove("shadow-lg");
  }
  lastScroll = currentScroll;
});

// ── Logo hover cycling ──
const logoText = document.getElementById("logo-text");
const logoStates = ["NOTaVPN", "Really, Not A VPN", "We Promise", "Stop Asking", "Read The Name"];
let logoIndex = 0;

logoText?.addEventListener("mouseenter", () => {
  logoIndex = (logoIndex + 1) % logoStates.length;
  if (logoText) logoText.textContent = logoStates[logoIndex];
});

logoText?.addEventListener("mouseleave", () => {
  // Reset after a delay if back to first state
  if (logoIndex !== 0) return;
  if (logoText) logoText.textContent = logoStates[0];
});

// ── Konami Code ──
const konamiSequence = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];
let konamiIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === konamiSequence[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiSequence.length) {
      konamiIndex = 0;
      const overlay = document.getElementById("konami-overlay");
      overlay?.classList.add("active");

      // Update text with current locale
      const msg = overlay?.querySelector("[data-i18n='konami.message']");
      if (msg) msg.textContent = t("konami.message");
      const closeBtn = overlay?.querySelector("[data-i18n='konami.close']");
      if (closeBtn) closeBtn.textContent = t("konami.close");
    }
  } else {
    konamiIndex = 0;
  }
});

document.getElementById("konami-close")?.addEventListener("click", () => {
  document.getElementById("konami-overlay")?.classList.remove("active");
});

// ── Share buttons ──
document.querySelectorAll(".share-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const platform = (btn as HTMLElement).dataset.platform;
    const url = encodeURIComponent("https://notavpn.eu");
    const text = encodeURIComponent("Ceci n'est pas un VPN. 🎨");

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank", "noopener");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener");
        break;
      case "copy":
        navigator.clipboard.writeText("https://notavpn.eu").then(() => {
          const icon = btn.querySelector("svg");
          if (icon) {
            const original = icon.outerHTML;
            icon.outerHTML = `<svg class="w-4 h-4 text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
            setTimeout(() => {
              btn.querySelector("svg")!.outerHTML = original;
            }, 2000);
          }
        });
        break;
    }
  });
});

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = (anchor as HTMLAnchorElement).getAttribute("href");
    if (href && href !== "#") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
