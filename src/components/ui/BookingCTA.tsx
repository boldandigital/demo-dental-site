"use client";

import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  /** Destination URL — defaults to "#" so the stub is safe to drop in anywhere. */
  href?: string;
  /** Optional extra classes appended to the button-link styles. */
  className?: string;
};

/**
 * BookingCTA — magnetic booking button stub.
 *
 * Renders an anchor styled as a rounded primary CTA with a subtle
 * cursor-following effect (mirrors MagneticButton's GSAP pattern so
 * the stub looks and feels consistent). NO WhatsApp/Doctoralia wiring —
 * the WhatsAppButton in the root locale layout handles chat routing.
 *
 * i18n: pulls the label from `cta.book`. Server-component-friendly
 * because next-intl's `useTranslations` works in client components that
 * sit under a NextIntlClientProvider.
 */
export function BookingCTA({ href = "#", className }: Props) {
  const t = useTranslations("cta");
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 ${className ?? ""}`}
    >
      {t("book")}
    </Link>
  );
}
