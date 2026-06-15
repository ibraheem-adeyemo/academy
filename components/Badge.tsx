interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "orange";
  className?: string;
}

export default function Badge({
  children,
  variant = "green",
  className = "",
}: BadgeProps) {
  const variants = {
    green: "bg-light-green text-primary",
    orange: "bg-light-orange text-accent",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
