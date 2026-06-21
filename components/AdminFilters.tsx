"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Dropdown from "@/components/Dropdown";

const statuses = ["PENDING", "REVIEWED", "ACCEPTED", "REJECTED"] as const;

interface AdminFiltersProps {
  trackOptions: { value: string; label: string }[];
}

export default function AdminFilters({ trackOptions }: AdminFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? "";
  const track = searchParams.get("track") ?? "";

  function updateParam(key: "status" | "track", nextValue: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (nextValue) {
      params.set(key, nextValue);
    } else {
      params.delete(key);
    }
    router.push(`/admin${params.toString() ? `?${params.toString()}` : ""}`);
  }

  const statusOptions = [
    { value: "", label: "All statuses" },
    ...statuses.map((s) => ({ value: s, label: s })),
  ];

  const allTrackOptions = [
    { value: "", label: "All tracks" },
    ...trackOptions,
  ];

  return (
    <div className="mt-6 grid max-w-md gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-muted">
          Status
        </label>
        <Dropdown
          options={statusOptions}
          value={status}
          onChange={(value) => updateParam("status", value)}
          placeholder="All statuses"
          aria-label="Filter by status"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-muted">
          Track
        </label>
        <Dropdown
          options={allTrackOptions}
          value={track}
          onChange={(value) => updateParam("track", value)}
          placeholder="All tracks"
          aria-label="Filter by track"
        />
      </div>
    </div>
  );
}
