/**
 * Menupaneel + accordeon (Webflow-IX "menu-open/close" en "menu_dropdown_icon").
 * - Openen: schaal en opacity los van elkaar (eigen duur/ease per stap), vanuit
 *   rechtsboven. Menu-items (.menu-panel__group) faden na elkaar in (stagger).
 * - Sluiten via knop, overlay of Escape. Focus blijft binnen menu + knop.
 * - Tijdens open: Lenis gestopt en pagina-scroll vergrendeld; het paneel scrollt zelf.
 *   Geen overflow: hidden (dan verdwijnt de scrollbalk en verspringt de pagina);
 *   in plaats daarvan worden wiel/touch/scrolltoetsen buiten het paneel geblokkeerd
 *   en zet een scroll-listener de positie terug (bijv. bij slepen aan de scrollbalk).
 */
import { gsap } from "gsap";
import { motionEnabled } from "./env";
import { getLenis } from "./lenis";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initMenu(): void {
  const toggle =
    document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
  const overlay = document.querySelector<HTMLElement>("[data-menu-overlay]");
  if (!toggle || !panel || !overlay) return;

  // Beveiliging tegen dubbele init (bijv. dev-server hot-reload die het script
  // opnieuw uitvoert zonder de vorige listeners op te ruimen — anders krijg je
  // twee onafhankelijke "schakelaars" op dezelfde knop die elkaar tegenwerken).
  if (toggle.dataset.menuInitialized) return;
  toggle.dataset.menuInitialized = "true";

  // Elke stap heeft een eigen duur/ease. Sneller aanpasbaar dan één duration voor alles.
  const scaleDuration = motionEnabled ? 0.4 : 0;
  const opacityDuration = motionEnabled ? 0.6 : 0; // trager dan de schaal
  const overlayDuration = motionEnabled ? 0.3 : 0;
  const itemsStagger = motionEnabled ? 0.08 : 0; // pauze tussen elk menu-item
  const itemsDelay = motionEnabled ? 0.15 : 0; // wachttijd voor het eerste item start

  const items = () => [...panel.querySelectorAll<HTMLElement>(".menu-panel__group")];
  let isOpen = false;
  const scrollLock = createScrollLock(panel);

  const open = () => {
    isOpen = true;
    toggle.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    overlay.hidden = false;
    document.documentElement.classList.add("is-menu-open");
    getLenis()?.stop();
    scrollLock.lock();

    const groups = items();
    gsap.killTweensOf([panel, overlay, ...groups]);

    // Opacity en scale als twee losse tweens (verschillende duur/ease mogelijk)
    gsap.fromTo(panel, { scale: 0 }, { scale: 1, duration: scaleDuration, ease: "back.out(0.6)" });
    gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: opacityDuration, ease: "power1.out" });
    gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: overlayDuration, ease: "power2.out" });

    // Menu-items faden na elkaar in, met een korte opstartvertraging
    gsap.fromTo(
      groups,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: itemsStagger,
        delay: itemsDelay,
      },
    );

    panel.querySelector<HTMLElement>(FOCUSABLE)?.focus({ preventScroll: true });
  };

  const close = ({ returnFocus = true, instant = false } = {}) => {
    if (!isOpen) return;
    isOpen = false;
    toggle.setAttribute("aria-expanded", "false");
    gsap.killTweensOf([panel, overlay, ...items()]);
    gsap.to(panel, {
      opacity: 0,
      scale: 0,
      duration: instant ? 0 : scaleDuration,
      ease: "power2.inOut",
      onComplete: () => {
        panel.hidden = true;
      },
    });
    gsap.to(overlay, {
      opacity: 0,
      duration: instant ? 0 : overlayDuration,
      ease: "power2.inOut",
      onComplete: () => {
        overlay.hidden = true;
      },
    });
    document.documentElement.classList.remove("is-menu-open");
    scrollLock.unlock();
    getLenis()?.start();
    if (returnFocus) toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () => (isOpen ? close() : open()));
  overlay.addEventListener("click", () => close());

  document.addEventListener("keydown", (event) => {
    if (!isOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== "Tab") return;
    // Focus-trap: knop + zichtbare elementen in het paneel
    const items = [
      toggle,
      ...panel.querySelectorAll<HTMLElement>(FOCUSABLE),
    ].filter((el) => el.offsetParent !== null || el === toggle);
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Klik op een anchor naar deze pagina sluit het menu. Naar een andere pagina blijft het
  // menu open staan: de paginaovergang maakt een momentopname van de oude pagina, en die
  // zou anders een half gesloten (bevroren) paneel tonen tijdens de veeg.
  panel.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href, location.href);
      const samePage =
        url.origin === location.origin &&
        url.pathname === location.pathname &&
        url.search === location.search &&
        url.hash !== "";
      if (samePage) close({ returnFocus: false });
    });
  });

  // Terug via de back/forward-cache: menu meteen dicht
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) close({ returnFocus: false, instant: true });
  });

  initAccordion(panel);
}

const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);

/**
 * Pagina-scroll blokkeren zonder de scrollbalk te verbergen.
 * Scrollen binnen `allowed` (het menupaneel) blijft werken.
 */
function createScrollLock(allowed: HTMLElement) {
  let lockedY = 0;

  const blockOutside = (event: Event) => {
    if (event.target instanceof Node && allowed.contains(event.target)) return;
    event.preventDefault();
  };

  const blockKeys = (event: KeyboardEvent) => {
    if (!SCROLL_KEYS.has(event.key)) return;
    const target = event.target as HTMLElement | null;
    // Spatie op een knop/link/veld moet gewoon werken
    if (event.key === " " && target?.closest("button, a, input, textarea, select, [role='button']")) return;
    event.preventDefault();
  };

  // Vangnet (slepen aan de scrollbalk, middelklik-scrollen): positie terugzetten
  const holdPosition = () => {
    if (window.scrollY !== lockedY) window.scrollTo(0, lockedY);
  };

  return {
    lock() {
      lockedY = window.scrollY;
      window.addEventListener("wheel", blockOutside, { passive: false });
      window.addEventListener("touchmove", blockOutside, { passive: false });
      window.addEventListener("keydown", blockKeys);
      window.addEventListener("scroll", holdPosition);
    },
    unlock() {
      window.removeEventListener("wheel", blockOutside);
      window.removeEventListener("touchmove", blockOutside);
      window.removeEventListener("keydown", blockKeys);
      window.removeEventListener("scroll", holdPosition);
    },
  };
}

function initAccordion(panel: HTMLElement): void {
  panel
    .querySelectorAll<HTMLButtonElement>("[data-menu-accordion]")
    .forEach((button) => {
      const targetId = button.getAttribute("aria-controls");
      const children = targetId ? document.getElementById(targetId) : null;
      if (!children) return;

      button.addEventListener("click", () => {
        const expand = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(expand));
        gsap.to(children, {
          height: expand ? "auto" : 0,
          duration: motionEnabled ? 0.3 : 0,
          ease: "power2.inOut",
        });
      });
    });
}
