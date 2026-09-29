import { setRequestLocale, getTranslations } from "next-intl/server";
import { MagneticButton } from "@/components/MagneticButton";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("cta");

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Demo Dental · {locale}
      </p>

      <h1 className="font-display mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
        {t("hero")}
      </h1>

      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        {t("tagline")}
      </p>

      <div className="mt-12">
        <Link href="/book">
          <MagneticButton className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            {tc("book")}
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}
