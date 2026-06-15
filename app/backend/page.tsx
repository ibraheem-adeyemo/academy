import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Backend Engineering Track — TopStack Academy",
  description:
    "Master Node.js, PostgreSQL, REST APIs, and payment integrations in 3 months. Build production-ready backend systems at TopStack Academy.",
};

export default function BackendPage() {
  return <TrackPage {...tracks.backend} />;
}
