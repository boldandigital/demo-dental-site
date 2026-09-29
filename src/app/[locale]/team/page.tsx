import { setRequestLocale } from "next-intl/server";
import { Team } from "@/components/sections/Team";
import { MagneticButton } from "@/components/MagneticButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Team />
      <BookCta />
    </>
  );
}

function BookCta() {
  const t = useTranslations("cta");
  return (
    <section className="mx-auto flex max-w-6xl justify-center px-4 pb-24 sm:px-6">
      <Link href="/book">
        <MagneticButton className="rounded-full border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          {t("book")}
        </MagneticButton>
      </Link>
    </section>
  );
}
