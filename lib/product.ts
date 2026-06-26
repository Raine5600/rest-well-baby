export const BRAND = {
  name: "Rest Well Baby",
  tagline: "Evidence-based sleep guidance for exhausted parents",
  domain: "getrestwellbaby.com",
} as const;

export const SUMMER_DEAL = {
  active: true,
  label: "SUMMER DEAL!",
  headline: "Full sleep system just $24",
  endsAt: "2026-08-31T23:59:59-04:00",
  badge: "Summer Deal — ends Aug 31",
} as const;

export const PRODUCT = {
  id: "infant-sleep-system",
  name: "Infant Sleep System",
  fullName: "Rest Well Baby Infant Sleep System",
  description:
    "A complete PDF toolkit for parents of babies 0–12 months — science, schedules, the 4-month shift, sleep training guides, and printable worksheets.",
  price: 24,
  compareAt: 49,
  currency: "usd",
  fileName: "Rest_Well_Baby_Sleep_System_Package.zip",
  fileLabel: "Full PDF Package (ZIP)",
} as const;

export const PACKAGE_ITEMS = [
  {
    num: "01",
    title: "Main Guide",
    description:
      "40+ page complete guide: sleep science, safe sleep, 4-month shift, training methods, schedules & troubleshooting.",
    accent: "navy",
  },
  {
    num: "02",
    title: "4-Month Action Plan",
    description: "14-day step-by-step regression recovery playbook with daily checklists.",
    accent: "sage",
  },
  {
    num: "03",
    title: "Cheat Sheet",
    description: "Fridge-ready quick reference: wake windows, safe sleep, Ferber intervals.",
    accent: "moon",
  },
  {
    num: "04",
    title: "Sleep Log",
    description: "14 days of printable tracking sheets to spot patterns and progress.",
    accent: "rose",
  },
  {
    num: "05",
    title: "Routine Builder",
    description: "Custom bedtime routine worksheet your whole family can follow.",
    accent: "amber",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What format do I receive?",
    a: "Instant download as a ZIP file with all 5 PDFs plus image assets. Works on phone, tablet, and computer — print what you need.",
  },
  {
    q: "What age range is this for?",
    a: "Birth through 12 months, with dedicated sections for newborns (0–3 mo), the 4-month shift, and sleep training readiness (6+ mo).",
  },
  {
    q: "Is this medical advice?",
    a: "No. This is educational guidance based on pediatric sleep research and AAP safe-sleep guidelines. Always consult your pediatrician for health concerns.",
  },
  {
    q: "How fast will I get access?",
    a: "Immediately after checkout. You'll land on a download page and can save the ZIP to your device right away.",
  },
  {
    q: "What if it doesn't work for us?",
    a: "Email us within 14 days for a full refund — no hoops, no guilt. We want you rested, not stressed.",
  },
] as const;