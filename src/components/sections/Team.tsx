import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { CLINIC_TEAM } from "@/lib/clinic-constants";

/**
 * Team — server-rendered stub.
 *
 * Renders a 2-column grid of placeholder profile cards. Avatar is the
 * SVG placeholder under /public/team/placeholder.svg. Names use the
 * Fraunces display font.
 */
export async function Team() {
  const t = await getTranslations("team");

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

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {CLINIC_TEAM.map((member) => (
          <li
            key={member.id}
            className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
          >
            <Image
              src={member.avatar}
              alt=""
              width={72}
              height={72}
              className="size-18 shrink-0 rounded-full"
            />
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">
                {member.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
