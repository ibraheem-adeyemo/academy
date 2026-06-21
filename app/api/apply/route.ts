import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

interface ApplicationPayload {
  fullName: string;
  email: string;
  whatsapp: string;
  track: string;
  experience: string;
  message: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as ApplicationPayload;

  if (!data.fullName || !data.email || !data.whatsapp || !data.track) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  await prisma.application.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      whatsapp: data.whatsapp,
      track: data.track,
      experience: data.experience,
      message: data.message,
    },
  });

  const webhookUrl = process.env.APPLY_FORM_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  return NextResponse.json({ success: true });
}
