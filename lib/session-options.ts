import type { SessionOptions } from "iron-session";

export interface SessionData {
  adminEmail?: string;
}

export const sessionOptions: SessionOptions = {
  cookieName: "topstack_admin_session",
  password: process.env.SESSION_SECRET!,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
