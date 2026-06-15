import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/tracks";

const courseLinks = [
  { label: "Frontend", href: "/frontend" },
  { label: "Backend", href: "/backend" },
  { label: "Fullstack", href: "/fullstack" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: IconBrandInstagram },
  { label: "TikTok", href: "https://tiktok.com", icon: IconBrandTiktok },
  { label: "Twitter / X", href: "https://x.com", icon: IconBrandX },
];

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span
                className="h-6 w-6 rounded-sm bg-primary"
                aria-hidden="true"
              />
              <span className="text-lg font-bold text-white">
                TopStack Academy
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-light-green">
              We don&apos;t just teach code. We build careers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-light-green">
              Courses
            </h3>
            <ul className="mt-4 space-y-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-light-green">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-light-green">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <IconBrandWhatsapp size={18} aria-hidden="true" />
                  +234 703 585 3137
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@topstackacademy.com"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <IconMail size={18} aria-hidden="true" />
                  hello@topstackacademy.com
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2026 TopStack Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
