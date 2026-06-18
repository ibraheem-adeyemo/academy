import type { Metadata } from "next";
import { IconClock, IconSchool, IconUsers } from "@tabler/icons-react";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Apply — TopStack Academy",
  description:
    "Apply to TopStack Academy. Fill in the form below and we'll review your application and get back to you within 24 hours via WhatsApp or email.",
};

const trustIndicators = [
  { icon: IconClock, label: "Response within 24hrs" },
  { icon: IconUsers, label: "Limited seats per cohort" },
  { icon: IconSchool, label: "No experience needed" },
];

export default function ApplyPage() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeader
            heading="Apply to TopStack Academy"
            subheading="Fill in the form below. We'll review your application and get back to you within 24 hours via WhatsApp or email."
          />
        </FadeIn>
{/* https://tally.so/r/7RjlkR */}
        <FadeIn delay={0.1} className="mt-10 overflow-hidden rounded-card border border-gray-200">
          <iframe
            src="https://tally.so/embed/7RjlkR"
            title="TopStack Academy application form"
            className="h-[800px] w-full"
            loading="lazy"
          />
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="mt-6 rounded-card bg-light-green p-4 text-center text-sm text-dark-text"
        >
          We accept bank transfer. No payment is required to apply. You only
          pay once your spot is confirmed.
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 grid gap-4 sm:grid-cols-3">
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-card border border-gray-200 p-4 text-center"
              >
                <Icon size={24} className="text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-dark-text">
                  {item.label}
                </p>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
