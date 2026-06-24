"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";

const courseLinks = [
  { label: "Free Stack", href: "/freestack" },
  { label: "Frontend", href: "/frontend" },
  { label: "Backend", href: "/backend" },
  { label: "Fullstack", href: "/fullstack" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-[0.5px] border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="h-6 w-6 rounded-sm bg-primary"
            aria-hidden="true"
          />
          <span className="text-lg font-bold text-primary">
            TopStack Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-dark-text transition-colors hover:text-primary"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={coursesOpen}
              aria-haspopup="true"
              onClick={() => setCoursesOpen((open) => !open)}
              className="flex items-center gap-1 text-sm font-medium text-dark-text transition-colors hover:text-primary"
            >
              Courses
              <IconChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  coursesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-48 rounded-card border border-gray-200 bg-white p-2 shadow-lg"
                >
                  {courseLinks.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      onClick={() => setCoursesOpen(false)}
                      className="block rounded-btn px-3 py-2 text-sm text-dark-text transition-colors hover:bg-light-green hover:text-primary"
                    >
                      {course.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="text-sm font-medium text-dark-text transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-dark-text transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-dark-text transition-colors hover:text-primary"
          >
            Blog
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            href="/apply"
            className="rounded-btn bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Apply now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="text-dark-text lg:hidden"
        >
          {mobileOpen ? (
            <IconX size={26} aria-hidden="true" />
          ) : (
            <IconMenu2 size={26} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-200 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-btn px-3 py-2 text-sm font-medium text-dark-text hover:bg-light-green hover:text-primary"
              >
                Home
              </Link>

              <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Courses
              </p>
              {courseLinks.map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-btn px-3 py-2 text-sm font-medium text-dark-text hover:bg-light-green hover:text-primary"
                >
                  {course.label}
                </Link>
              ))}

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-btn px-3 py-2 text-sm font-medium text-dark-text hover:bg-light-green hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="rounded-btn px-3 py-2 text-sm font-medium text-dark-text hover:bg-light-green hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="rounded-btn px-3 py-2 text-sm font-medium text-dark-text hover:bg-light-green hover:text-primary"
              >
                Blog
              </Link>

              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-btn bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90"
              >
                Apply now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
