import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Fullstack Development Track — TopStack Academy",
  description:
    "Go from beginner to fullstack developer in 6 months. Build complete web products with React, Node.js, and PostgreSQL. TopStack Academy, Nigeria.",
};

export default function FullstackPage() {
  return <TrackPage {...tracks.fullstack} />;
}
