import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";
import type { Track } from "@/lib/tracks";
import { trackFaqs } from "@/lib/faqs";
import Badge from "./Badge";
import SectionHeader from "./SectionHeader";
import Accordion from "./Accordion";
import CTABanner from "./CTABanner";
import FadeIn from "./FadeIn";
import { WHATSAPP_LINK } from "@/lib/tracks";

const colourStyles: Record<
  Track["colour"],
  { badge: "green" | "orange"; text: string; numberBg: string }
> = {
  green: {
    badge: "green",
    text: "text-primary",
    numberBg: "bg-light-green text-primary",
  },
  orange: {
    badge: "orange",
    text: "text-accent",
    numberBg: "bg-light-orange text-accent",
  },
};

const included = [
  "Full curriculum & live weekend classes",
  "Hands-on projects for your portfolio",
  "CV and portfolio review",
  "TopStack Academy certificate of completion",
  "WhatsApp group support with cohort and instructor",
];

function formatInstalment(price: string): string {
  const numeric = Number(price.replace(/[^\d]/g, ""));
  return `₦${(numeric / 2).toLocaleString("en-NG")}`;
}

export default function TrackPage({
  slug,
  title,
  tagline,
  duration,
  level,
  price,
  modules,
  projects,
  forWho,
  colour,
  badge,
}: Track) {
  const styles = colourStyles[colour];

  return (
    <>
      {/* Section 1 — Track hero */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/#tracks" className="transition-colors hover:text-primary">
                Courses
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-dark-text">
                {title}
              </span>
            </nav>

            <div className="mt-6">
              <Badge variant={styles.badge}>{badge}</Badge>
            </div>

            <h1 className="mt-4 text-4xl font-semibold text-dark-text sm:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-muted">{tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-sm text-muted">Duration</p>
                <p className="font-semibold text-dark-text">{duration}</p>
              </div>
              <div className="h-10 w-px bg-gray-200" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Level</p>
                <p className="font-semibold text-dark-text">{level}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/apply"
                className="inline-block rounded-btn bg-primary px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Apply for this track
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — What you'll learn */}
      <section className="bg-light-green/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionHeader heading="What you'll learn" align="left" />
          </FadeIn>
          <FadeIn className="mt-8" delay={0.1}>
            <Accordion
              numbered
              numberClassName={styles.numberBg}
              items={modules.map((module) => ({
                title: module.title,
                content: (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* Section 3 — Projects you'll build */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionHeader heading="Projects you'll build" align="left" />
          </FadeIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn key={project.name} delay={index * 0.05}>
                <div className="relative h-full overflow-hidden rounded-card border border-gray-200 bg-white p-6 pl-7">
                  <span
                    className="absolute inset-y-0 left-0 w-1.5 bg-accent"
                    aria-hidden="true"
                  />
                  <Badge variant="orange" className="mb-3">
                    Goes in your portfolio
                  </Badge>
                  <h3 className="text-lg font-semibold text-dark-text">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-muted">{project.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Who this is for */}
      <section className="bg-light-green px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionHeader heading="This track is for you if..." align="left" />
          </FadeIn>
          <FadeIn className="mt-8" delay={0.1}>
            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <IconCheck size={16} aria-hidden="true" />
                  </span>
                  <span className="text-dark-text">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Section 5 — Pricing */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeader heading="Investment" align="left" />
          </FadeIn>
          <FadeIn className="mt-8 rounded-card border border-gray-200 p-6 sm:p-10" delay={0.1}>
            <p className={`text-4xl font-semibold sm:text-5xl ${styles.text}`}>
              {price}
            </p>
            <p className="mt-1 text-muted">One-time programme fee</p>

            <div className="mt-8">
              <h3 className="font-semibold text-dark-text">
                What&apos;s included
              </h3>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-gray-200 p-4">
                <p className="font-semibold text-dark-text">Full payment</p>
                <p className="mt-1 text-muted">{price} paid at once</p>
              </div>
              <div className="rounded-card border border-gray-200 p-4">
                <p className="font-semibold text-dark-text">
                  2-instalment plan
                </p>
                <p className="mt-1 text-muted">
                  2 x {formatInstalment(price)}
                </p>
              </div>
            </div>

            <Link
              href="/apply"
              className="mt-8 block w-full rounded-btn bg-accent px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-accent/90 sm:w-auto sm:max-w-xs"
            >
              Apply now — secure your spot
            </Link>
            <p className="mt-4 text-sm text-muted">
              We accept bank transfer. Payment details sent after application.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 6 — FAQ teaser */}
      <section className="bg-light-green/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeader heading="Frequently asked questions" align="left" />
          </FadeIn>
          <FadeIn className="mt-8" delay={0.1}>
            <Accordion
              items={trackFaqs[slug].map((faq) => ({
                title: faq.question,
                content: <p>{faq.answer}</p>,
              }))}
            />
          </FadeIn>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="font-semibold text-primary transition-colors hover:text-accent"
            >
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to start building?"
        subtext="Next cohort starts soon. Seats are limited."
        buttons={[
          { label: "Apply now", href: "/apply", variant: "accent" },
          {
            label: "Chat on WhatsApp",
            href: WHATSAPP_LINK,
            variant: "outline-white",
            external: true,
          },
        ]}
      />
    </>
  );
}
