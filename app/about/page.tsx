import type { Metadata } from "next";
import { IconCertificate, IconMapPin, IconTargetArrow } from "@tabler/icons-react";
import Badge from "@/components/Badge";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About — TopStack Academy",
  description:
    "Meet Ibraheem Adeyemo, a senior frontend engineer with 6+ years of experience at Interswitch and Paytelstack, and the founder of TopStack Academy.",
};

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Paystack",
  "Microfrontend",
];

const missions = [
  {
    icon: IconTargetArrow,
    title: "Practical over theoretical",
    description:
      "Every lesson is grounded in real-world use cases. We don't teach concepts in isolation.",
  },
  {
    icon: IconMapPin,
    title: "Nigerian tech, built by Nigerians",
    description:
      "Our projects, examples, and context are built around the Nigerian market and the companies here.",
  },
  {
    icon: IconCertificate,
    title: "Careers, not just certificates",
    description:
      "A certificate means nothing without skills. We measure success by what you can build and where you get hired.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Instructor hero */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionHeader heading="Meet your instructor" align="left" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-light-green text-3xl font-semibold text-primary"
                aria-hidden="true"
              >
                IA
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-dark-text">
                  Ibraheem Adeyemo
                </h2>
                <p className="mt-1 text-muted">
                  Senior Frontend Engineer &amp; Founder, TopStack Academy
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
              I&apos;m Ibraheem — a frontend engineer with over 6 years of
              experience building large-scale applications at companies like
              Interswitch and Paytelstack. At Interswitch I architected
              dashboards serving 1,800 users and processing 600,000+ monthly
              transactions. I&apos;ve built fraud detection portals, payment
              systems, and microfrontend architectures that power real money
              movement across Nigeria. I started TopStack Academy because I
              know exactly what Nigerian companies are looking for — and I
              know most coding courses aren&apos;t teaching it. Here, you
              learn what I wish someone had taught me.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="green">
                  {skill}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — Mission */}
      <section className="bg-light-green px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionHeader heading="Why TopStack exists" />
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <FadeIn key={mission.title} delay={index * 0.05}>
                  <div className="flex h-full flex-col rounded-card bg-white p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-card bg-light-green text-primary">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-dark-text">
                      {mission.title}
                    </h3>
                    <p className="mt-2 text-muted">{mission.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
