// /middleware.js
import { NextResponse } from "next/server";

/**
 * Global maintenance redirect middleware
 * - Toggle with the `MAINTENANCE_ON` boolean below (no .env required)
 * - Allows: /maintenance, _next assets, api, public static files, favicons, and files with extensions
 * - Supports preview bypass via ?preview=true or cookie "preview-mode" (so you can view site)
 */

const MAINTENANCE_ON = false; // <-- set to false to disable maintenance redirect

export function middleware(request) {
  try {
    const { nextUrl } = request;
    const pathname = nextUrl.pathname || "/";

    // Debug logs (visible in terminal when running dev)
    console.log("[middleware] pathname:", pathname, "MAINT:", MAINTENANCE_ON);

    // Allow maintenance page itself and any path that includes /maintenance (covers locales or basePath)
    if (pathname === "/maintenance" || pathname.endsWith("/maintenance") || pathname.includes("/maintenance/")) {
      return NextResponse.next();
    }

    // Allow core Next assets, API routes, and public static files / favicons
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname === "/favicon.ico" ||
      pathname === "/robots.txt" ||
      pathname.startsWith("/static") ||
      pathname.includes(".") // quick allow for files like .png .css .svg .woff
    ) {
      return NextResponse.next();
    }

    // Preview bypass: allow ?preview=true OR cookie named preview-mode=true
    const previewQuery = nextUrl.searchParams.get("preview") === "true";
    const previewCookie = request.cookies.get?.("preview-mode")?.value === "true";
    if (previewQuery || previewCookie) {
      console.log("[middleware] preview bypass active");
      return NextResponse.next();
    }

    // If maintenance off, do nothing
    if (!MAINTENANCE_ON) {
      return NextResponse.next();
    }

    // Otherwise redirect everything else to /maintenance
    const dest = nextUrl.clone();
    dest.pathname = "/maintenance";
    // Optionally include original path in query for debugging:
    // dest.searchParams.set("from", pathname);
    console.log("[middleware] redirecting to /maintenance from", pathname);
    return NextResponse.redirect(dest);
  } catch (err) {
    console.error("[middleware] error:", err);
    return NextResponse.next();
  }
}

// apply to all routes
export const config = {
  matcher: "/:path*",
};
