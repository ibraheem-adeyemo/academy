import Link from "next/link";
import { getSession } from "@/lib/session";
import { logoutAction } from "./login/actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-gray-50">
      {session.adminEmail && (
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <Link
              href="/admin"
              className="text-sm font-bold text-primary"
            >
              TopStack Academy — Admin
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted">{session.adminEmail}</span>
              <form action={logoutAction}>
                <button
                  type="submit"
                  aria-label="Log out"
                  className="rounded-btn border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-dark-text transition-colors hover:border-primary hover:text-primary"
                >
                  Log out
                </button>
              </form>
            </div>
          </div>
        </header>
      )}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
