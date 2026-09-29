import { setRequestLocale, getTranslations } from "next-intl/server";
import { MagneticButton } from "@/components/MagneticButton";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BookPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("book");

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        {t("subtitle")}
      </p>

      <div className="mt-12">
        <Link href="/">
          <MagneticButton className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-muted">
            ← Home
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}
