import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import StatusSelect from "@/components/StatusSelect";
import { updateStatusAction } from "./actions";

export default async function ApplicationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const application = await prisma.application.findUnique({
    where: { id: params.id },
  });

  if (!application) {
    notFound();
  }

  const fields: { label: string; value: string }[] = [
    { label: "Full name", value: application.fullName },
    { label: "Email", value: application.email },
    { label: "WhatsApp", value: application.whatsapp },
    { label: "Track", value: application.track },
    { label: "Experience level", value: application.experience },
  ];

  return (
    <div>
      <Link href="/admin" className="text-sm text-primary hover:underline">
        ← Back to applications
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-dark-text">
          {application.fullName}
        </h1>
        <StatusSelect
          currentStatus={application.status}
          onUpdate={updateStatusAction.bind(null, application.id)}
        />
      </div>

      <p className="mt-1 text-sm text-muted">
        Submitted {application.createdAt.toLocaleString()}
      </p>

      <div className="mt-8 grid gap-6 rounded-card border border-gray-200 p-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.label}>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {field.label}
            </p>
            <p className="mt-1 text-sm text-dark-text">{field.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-card border border-gray-200 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Why they want to join
        </p>
        <p className="mt-2 whitespace-pre-wrap text-sm text-dark-text">
          {application.message}
        </p>
      </div>
    </div>
  );
}
