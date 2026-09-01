import { NextResponse, type NextRequest } from "next/server";

// Temporary site-wide gate while the directory is incomplete.
// Active only when SITE_GATE_USER and SITE_GATE_PASSWORD are set in the
// environment; unset both to make the site public again.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {
  const user = process.env.SITE_GATE_USER;
  const pass = process.env.SITE_GATE_PASSWORD;

  if (!user || !pass) {
    return NextResponse.next();
  }

  const header = req.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    const decoded = atob(header.slice(6));
    const sep = decoded.indexOf(":");
    const u = decoded.slice(0, sep);
    const p = decoded.slice(sep + 1);
    if (u === user && p === pass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Private", charset="UTF-8"' },
  });
}
