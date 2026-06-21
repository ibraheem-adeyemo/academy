import { loginAction } from "./actions";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string; from?: string };
}) {
  const hasError = searchParams.error === "1";
  const from = searchParams.from ?? "/admin";

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full max-w-sm rounded-card border border-gray-200 p-8">
        <h1 className="text-xl font-semibold text-dark-text">Admin login</h1>
        <p className="mt-1 text-sm text-muted">
          Sign in to view TopStack Academy applications.
        </p>

        <form action={loginAction} className="mt-6 flex flex-col gap-4">
          <input type="hidden" name="from" value={from} />

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-dark-text">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-btn border border-gray-300 px-3.5 py-2.5 text-sm text-dark-text outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-dark-text"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-btn border border-gray-300 px-3.5 py-2.5 text-sm text-dark-text outline-none transition-colors focus:border-primary"
            />
          </div>

          {hasError && (
            <p className="text-sm text-red-600">Invalid email or password.</p>
          )}

          <button
            type="submit"
            aria-label="Log in"
            className="mt-2 rounded-btn bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
}
