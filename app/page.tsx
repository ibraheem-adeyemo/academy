import Link from "next/link";
import {
  IconBriefcase,
  IconCode,
  IconDeviceDesktop,
  IconGift,
  IconServer2,
  IconStack2,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import SectionHeader from "@/components/SectionHeader";
import TrackCard from "@/components/TrackCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { WHATSAPP_LINK } from "@/lib/tracks";

const features = [
  {
    icon: IconCode,
    title: "Real projects only",
    description:
      "No toy exercises. Every project goes in your portfolio.",
  },
  {
    icon: IconUser,
    title: "Industry instructor",
    description:
      "Learn from a senior engineer who's built production systems at scale.",
  },
  {
    icon: IconUsers,
    title: "Small cohorts",
    description:
      "Limited seats per cohort so you get actual attention, not just a Zoom link.",
  },
  {
    icon: IconBriefcase,
    title: "Career support",
    description:
      "CV review, portfolio feedback, and LinkedIn optimisation included.",
  },
];

const testimonials = [
  {
    quote:
      "I had zero coding experience. 3 months later I landed my first freelance client. TopStack changed my life.",
    name: "Amara O.",
    track: "Frontend track",
  },
  {
    quote:
      "The backend curriculum is the most practical I've seen. We built real APIs with real payment integrations.",
    name: "Tunde A.",
    track: "Backend track",
  },
  {
    quote:
      "Ibraheem doesn't just teach — he mentors. I feel like I actually understand what I'm building.",
    name: "Fatima B.",
    track: "Fullstack track",
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="hero-radial relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-semibold text-dark-text sm:text-5xl lg:text-6xl">
              You&apos;ve been using the internet your whole life. It&apos;s
              time to build it.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              TopStack Academy trains the next generation of Nigerian software
              engineers — from complete beginner to job-ready developer.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="#tracks"
                className="rounded-btn bg-primary px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Explore our courses
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-btn border-2 border-primary px-6 py-3 text-center font-semibold text-primary transition-colors hover:bg-light-green"
              >
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — Stats bar */}
      <section className="bg-primary px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-semibold text-white sm:text-4xl">
              6+ Years
            </p>
            <p className="mt-1 text-xs text-light-green sm:text-base">
              Industry experience
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white sm:text-4xl">
              4 Tracks
            </p>
            <p className="mt-1 text-xs text-light-green sm:text-base">
              Free Stack, Frontend, Backend, Fullstack
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white sm:text-4xl">
              100%
            </p>
            <p className="mt-1 text-xs text-light-green sm:text-base">
              Project-based learning
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Track cards */}
      <section id="tracks" className="px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            heading="Choose your track"
            subheading="All tracks are beginner-friendly. Pick based on where you want to go."
          />
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0}>
            <TrackCard
              icon={<IconGift size={24} aria-hidden="true" />}
              badge="100% Free"
              badgeVariant="orange"
              title="Free Stack"
              description="Our free, intensive introduction to web development. Learn the fundamentals and build one real project — at zero cost."
              duration="8 weeks"
              level="Complete beginner"
              href="/freestack"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <TrackCard
              icon={<IconDeviceDesktop size={24} aria-hidden="true" />}
              badge="Beginner friendly"
              badgeVariant="green"
              title="Frontend Engineering"
              description="Build the interfaces people see and interact with. React, TypeScript, Tailwind CSS and more."
              duration="3 months"
              level="Beginner → Intermediate"
              href="/frontend"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <TrackCard
              icon={<IconServer2 size={24} aria-hidden="true" />}
              badge="Most popular"
              badgeVariant="orange"
              title="Backend Engineering"
              description="Build the engines that power apps. Node.js, APIs, databases, authentication, and deployment."
              duration="3 months"
              level="Beginner → Intermediate"
              href="/backend"
              highlight
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <TrackCard
              icon={<IconStack2 size={24} aria-hidden="true" />}
              badge="Best value"
              badgeVariant="green"
              title="Fullstack Development"
              description="Own the entire product. From pixel-perfect UI to deployed backend — build complete apps alone."
              duration="6 months"
              level="Beginner → Advanced"
              href="/fullstack"
            />
          </FadeIn>
        </div>
      </section>

      {/* Section 4 — Why TopStack */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader heading="Why students choose TopStack" />
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-card border border-gray-200 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-light-green text-primary">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-dark-text">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted">{feature.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Section 5 — Testimonials */}
      <section className="bg-light-green px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader heading="What our students say" />
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 6 — CTA banner */}
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
