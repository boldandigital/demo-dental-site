import { getTranslations } from "next-intl/server";
import { CLINIC_SERVICES } from "@/lib/clinic-constants";

/**
 * Services — server-rendered stub.
 *
 * Renders a 3-column grid of placeholder service cards. Titles use the
 * Fraunces display font (via the `font-display` utility, which maps to
 * `--font-display` in globals.css). Body uses Inter. Card accent dots
 * pick up brand palette via the `text-primary` / `text-accent` /
 * `text-foreground` utilities.
 */
export async function Services() {
  const t = await getTranslations("services");

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {t("subtitle")}
        </p>
      </header>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CLINIC_SERVICES.map((service) => {
          const accentClass =
            service.accent === "primary"
              ? "bg-primary"
              : service.accent === "accent"
                ? "bg-accent"
                : "bg-foreground";

          return (
            <li
              key={service.id}
              className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
            >
              <span
                aria-hidden
                className={`inline-block size-2.5 rounded-full ${accentClass}`}
              />
              <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
