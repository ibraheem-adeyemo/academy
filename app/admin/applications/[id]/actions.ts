"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/session";

const statuses = ["PENDING", "REVIEWED", "ACCEPTED", "REJECTED"] as const;

export async function updateStatusAction(id: string, formData: FormData) {
  await requireAdmin();

  const status = formData.get("status");
  if (typeof status !== "string" || !statuses.includes(status as (typeof statuses)[number])) {
    throw new Error("Invalid status");
  }

  await prisma.application.update({
    where: { id },
    data: { status: status as (typeof statuses)[number] },
  });

  revalidatePath(`/admin/applications/${id}`);
  revalidatePath("/admin");
}
