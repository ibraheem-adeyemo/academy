import Link from "next/link";

interface CTAButtonConfig {
  label: string;
  href: string;
  variant: "accent" | "outline-white";
  external?: boolean;
}

interface CTABannerProps {
  heading: string;
  subtext?: string;
  buttons: CTAButtonConfig[];
}

const variantClasses: Record<CTAButtonConfig["variant"], string> = {
  accent: "bg-accent text-white hover:bg-accent/90",
  "outline-white": "border-2 border-white text-white hover:bg-white/10",
};

export default function CTABanner({
  heading,
  subtext,
  buttons,
}: CTABannerProps) {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mt-3 text-lg text-light-green">{subtext}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {buttons.map((button) =>
            button.external ? (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full rounded-btn px-6 py-3 text-center font-semibold transition-colors sm:w-auto ${
                  variantClasses[button.variant]
                }`}
              >
                {button.label}
              </a>
            ) : (
              <Link
                key={button.label}
                href={button.href}
                className={`w-full rounded-btn px-6 py-3 text-center font-semibold transition-colors sm:w-auto ${
                  variantClasses[button.variant]
                }`}
              >
                {button.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
