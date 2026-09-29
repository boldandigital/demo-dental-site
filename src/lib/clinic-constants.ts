/**
 * Clinic constants — placeholder data for the Sorridere Clinic demo.
 *
 * Stub-only. NO real dental copy, NO real practitioner names, NO real
 * services text. Replace with verified content in a later pass.
 *
 * Used by src/components/sections/Services.tsx and Team.tsx to render
 * the section stubs. Lives in src/lib so it is shared across server
 * components without dragging in client-only deps.
 */

export type ClinicService = {
  /** Stable id for keys and analytics */
  id: string;
  /** Display title (placeholder) */
  title: string;
  /** One-sentence body (placeholder) */
  body: string;
  /** Brand-token colour swatch for the card accent dot */
  accent: "primary" | "accent" | "foreground";
};

export type ClinicMember = {
  id: string;
  /** Placeholder display name (e.g. "Team Member One") */
  name: string;
  /** Placeholder role (e.g. "Placeholder role") */
  role: string;
  /** Path under /public for the avatar */
  avatar: string;
};

export const CLINIC_SERVICES: readonly ClinicService[] = [
  {
    id: "service-placeholder-1",
    title: "Placeholder Service One",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with a real service description in a later pass.",
    accent: "primary",
  },
  {
    id: "service-placeholder-2",
    title: "Placeholder Service Two",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Replace with a real service description later.",
    accent: "accent",
  },
  {
    id: "service-placeholder-3",
    title: "Placeholder Service Three",
    body: "Ut enim ad minim veniam, quis nostrud exercitation. Replace with a real service description later.",
    accent: "foreground",
  },
] as const;

export const CLINIC_TEAM: readonly ClinicMember[] = [
  {
    id: "team-placeholder-1",
    name: "Team Member One",
    role: "Placeholder role",
    avatar: "/team/placeholder.svg",
  },
  {
    id: "team-placeholder-2",
    name: "Team Member Two",
    role: "Placeholder role",
    avatar: "/team/placeholder.svg",
  },
] as const;
