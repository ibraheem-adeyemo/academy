"use client";

import { useTransition } from "react";

const statuses = ["PENDING", "REVIEWED", "ACCEPTED", "REJECTED"] as const;

interface StatusSelectProps {
  currentStatus: string;
  onUpdate: (formData: FormData) => Promise<void>;
}

export default function StatusSelect({
  currentStatus,
  onUpdate,
}: StatusSelectProps) {
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const formData = new FormData();
    formData.set("status", e.target.value);
    startTransition(() => {
      onUpdate(formData);
    });
  }

  return (
    <select
      defaultValue={currentStatus}
      onChange={handleChange}
      disabled={isPending}
      aria-label="Application status"
      className="rounded-btn border border-gray-300 px-3.5 py-2 text-sm font-medium text-dark-text outline-none transition-colors focus:border-primary disabled:opacity-60"
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
