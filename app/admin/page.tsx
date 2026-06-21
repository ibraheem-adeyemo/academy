import Link from "next/link";
import { prisma } from "@/lib/db";
import { trackList } from "@/lib/tracks";
import Badge from "@/components/Badge";
import AdminFilters from "@/components/AdminFilters";

const statuses = ["PENDING", "REVIEWED", "ACCEPTED", "REJECTED"] as const;

const statusVariant: Record<(typeof statuses)[number], "green" | "orange"> = {
  PENDING: "orange",
  REVIEWED: "orange",
  ACCEPTED: "green",
  REJECTED: "orange",
};

export default async function AdminApplicationsPage({
  searchParams,
}: {
  searchParams: { status?: string; track?: string };
}) {
  const status = searchParams.status;
  const track = searchParams.track;

  const applications = await prisma.application.findMany({
    where: {
      ...(status ? { status: status as (typeof statuses)[number] } : {}),
      ...(track ? { track } : {}),
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold text-dark-text">Applications</h1>
      <p className="mt-1 text-sm text-muted">
        {applications.length} application
        {applications.length === 1 ? "" : "s"}
      </p>

      <AdminFilters
        trackOptions={trackList.map((t) => ({
          value: t.title,
          label: t.title,
        }))}
      />

      <div className="mt-8 overflow-x-auto rounded-card border border-gray-200">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-dark-text">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Track</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr
                key={application.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/applications/${application.id}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {application.fullName}
                  </Link>
                  <p className="text-muted">{application.email}</p>
                </td>
                <td className="px-4 py-3 text-dark-text">
                  {application.track}
                </td>
                <td className="px-4 py-3">
                  <Badge variant={statusVariant[application.status]}>
                    {application.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-muted">
                  {application.createdAt.toLocaleDateString()}
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted">
                  No applications match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
