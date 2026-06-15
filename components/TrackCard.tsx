"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import Badge from "./Badge";

interface TrackCardProps {
  icon: React.ReactNode;
  badge: string;
  badgeVariant: "green" | "orange";
  title: string;
  description: string;
  duration: string;
  level: string;
  href: string;
  highlight?: boolean;
}

export default function TrackCard({
  icon,
  badge,
  badgeVariant,
  title,
  description,
  duration,
  level,
  href,
  highlight = false,
}: TrackCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`flex h-full flex-col rounded-card border bg-white p-6 shadow-sm ${
        highlight ? "border-2 border-accent" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-card bg-light-green text-primary">
          {icon}
        </div>
        <Badge variant={badgeVariant}>{badge}</Badge>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-dark-text">{title}</h3>
      <p className="mt-2 flex-1 text-muted">{description}</p>

      <div className="mt-5 flex items-center gap-4 text-sm text-muted">
        <span>{duration}</span>
        <span aria-hidden="true">•</span>
        <span>{level}</span>
      </div>

      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-accent"
      >
        View curriculum
        <IconArrowRight size={18} aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
