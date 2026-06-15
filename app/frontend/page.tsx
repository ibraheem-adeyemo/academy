import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Frontend Engineering Track — TopStack Academy",
  description:
    "Learn React, TypeScript, and Tailwind CSS in 3 months. Build real projects. Get job-ready. Taught by a senior engineer with 6+ years of industry experience.",
};

export default function FrontendPage() {
  return <TrackPage {...tracks.frontend} />;
}
