import { IconQuote } from "@tabler/icons-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  track: string;
}

export default function TestimonialCard({
  quote,
  name,
  track,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-card bg-white p-6 shadow-sm">
      <IconQuote
        size={28}
        className="text-accent"
        aria-hidden="true"
        fill="currentColor"
        stroke={0}
      />
      <p className="mt-4 flex-1 text-dark-text">{quote}</p>
      <div className="mt-5">
        <p className="font-semibold text-dark-text">{name}</p>
        <p className="text-sm text-muted">{track}</p>
      </div>
    </div>
  );
}
