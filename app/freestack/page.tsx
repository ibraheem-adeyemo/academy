import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Free Stack — 100% Free Beginner Web Development | TopStack Academy",
  description:
    "Learn real web development fundamentals for free in 8 weeks. No payment required. Build one live project and decide if software engineering is for you.",
};

export default function FreeStackPage() {
  return <TrackPage {...tracks.freestack} />;
}
