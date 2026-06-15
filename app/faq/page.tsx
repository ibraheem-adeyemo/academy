import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Accordion from "@/components/Accordion";
import FadeIn from "@/components/FadeIn";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ — TopStack Academy",
  description:
    "Answers to common questions about TopStack Academy's frontend, backend, and fullstack tracks — schedule, pricing, certificates, and more.",
};

export default function FaqPage() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeader heading="Frequently asked questions" />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <Accordion
            items={faqs.map((faq) => ({
              title: faq.question,
              content: <p>{faq.answer}</p>,
            }))}
          />
        </FadeIn>
      </div>
    </section>
  );
}
