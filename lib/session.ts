import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions, type SessionData } from "@/lib/session-options";

export function getSession() {
  return getIronSession<SessionData>(cookies(), sessionOptions);
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.adminEmail) {
    throw new Error("Not authenticated");
  }
  return session;
}
