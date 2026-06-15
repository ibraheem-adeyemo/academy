interface SectionHeaderProps {
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  heading,
  subheading,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 text-base sm:text-lg text-muted">{subheading}</p>
      )}
    </div>
  );
}
